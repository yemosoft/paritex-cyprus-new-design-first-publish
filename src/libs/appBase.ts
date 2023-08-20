import binanceCleint from './binance/binanceCleint';
import { notify } from "notiwind"
import AuthClerk from '@/libs/clerk/AuthClerk';

class appBase {

    binance: binanceCleint = new binanceCleint();

    note: typeof notify = notify

    auth: typeof AuthClerk = AuthClerk;

    private inited: boolean = false;

    private initedAfterMound: boolean = false;

    constructor() { }

    async init() {
        if (this.inited) return;
        // Set Binance core 
        await this.binance.init();

        this.inited = true
    }

    async initAfterMoundApp() {
        if (this.initedAfterMound) return;

        (await this.auth.getClerk()).load()

        this.initedAfterMound = true;
    }

    async load() {
        await this.init()
        // Set Binance core 

        let tickers = await this.binance.getAllTickers() as any[]

        this.binance.subscribeAll24hrTickers();
    }
}

export default new appBase()