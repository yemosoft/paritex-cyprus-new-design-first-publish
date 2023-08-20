import { USDMClient, MainClient, DefaultLogger, WebsocketClient } from 'binance';
import loggerBinance from './helpers/loggerBinance';
import _ from 'lodash';
import appSymbols from '../symbols/appSymbols';
import Ticker from '@/stores/models/tickers';
import { sleep } from '../sleep/Sleeping';




class binanceCleint {

    private apikey: string = ''

    private secretKey: string = ''

    private subscribes = []

    wsClient: WebsocketClient | null = null

    futureClient: USDMClient | null = null

    spotClient: MainClient | null = null

    public async init() {


        await this.loadSymbols()

        this.subscribeAll24hrTickers()

        await sleep(200)

        this.listenChangePrice()

        return this
    }

    public async loadSymbols() {

        try {
            let tickers = await this.getAllTickers() as any[]
            let filtredTickers = appSymbols.filterSymbols(tickers)
            await Ticker.create({
                data: filtredTickers
            })
        } catch (error) {
            throw error
        }

        return this
    }

    private setSpotClient(withApiKey: boolean = false) {

        let data = {}
        if (withApiKey) {
            let apiData = {
                api_key: this.apikey,
                api_secret: this.secretKey
            }
            data = { ...apiData }
        }
        return new MainClient(data);
    }

    private setFutureClient(withApiKey: boolean = false) {
        let data = {}
        if (withApiKey) {
            let apiData = {
                api_key: this.apikey,
                api_secret: this.secretKey
            }
            data = { ...apiData }
        }

        return new USDMClient(data);
    }

    private setWsClient() {
        if (this.wsClient != null) return this.wsClient
        let cleint = new WebsocketClient({ beautify: true, disableHeartbeat: false }, loggerBinance);
        this.wsClient = cleint
        return this.wsClient
    }

    public async getAllTickers() {
        let client = this.setSpotClient()
        try {
            return await client.get24hrChangeStatististics()
        } catch (error) {
            throw error
        }
    }

    public subscribeAll24hrTickers() {
        let client = this.setWsClient()
        try {
            let tickerSubs = client.subscribeAll24hrTickers('usdm');
            this.subscribes['tickerSubs'] = tickerSubs

            return tickerSubs
        } catch (error) {
            throw error
        }
    }

    private isTickerData(object) {
        let keys = Object.keys(object)
        return (keys.includes('symbol') && keys.includes('priceChange')) ? true : false
    }

    private async updateSymbolData(newData) {
        try {
            let localTicker = await Ticker.update({
                where: record => record.id === newData.symbol,
                data: {
                    lastPrice: newData.currentClose,
                    priceChange: newData.priceChange,
                    priceChangePercent: newData.priceChangePercent,

                }
            })
        } catch (error) {
            throw error
        }


    }

    private listenChangePrice() {
        if (this.wsClient == null) return
        this.wsClient.on('formattedMessage', async (tickers: any) => {
            try {
                for (let i = 0; i < tickers.length; i++) {
                    const ticker = tickers[i];
                    if (ticker.eventType !== '24hrTicker' && !this.isTickerData(ticker)) { continue; }
                    if (!appSymbols.isSupportedSymbol(ticker.symbol)) { continue; }
                    this.updateSymbolData(ticker)
                }
            } catch (error) {

            }
        });
    }


    public async test() {


    }


}

export default binanceCleint