import { supportedSymbols, type ISymbols, type ISymbol } from '@/configs/assets';
import type { DailyChangeStatistic } from 'binance';
import _ from 'lodash';




class appSymbols {

    public supportedSymbols: ISymbols = supportedSymbols

    getSymbol(symbolName: string) {
        return _.find(this.supportedSymbols, function (o) { return o.symbol == symbolName; });
    }

    isSupportedSymbol(symbolName: string) {
        return (this.getSymbol(symbolName) == null) ? false : true
    }

    getAsKey() {
        return Object.keys(this.supportedSymbols)
    }

    filterSymbols(symbols: any[]) {
        let filtereds = _.filter(symbols, (symbol) => (_.indexOf(this.getAsKey(), symbol.symbol) != -1))
        let filteredSymbols: any[] = []
        for (let i = 0; i < filtereds.length; i++) {
            const filtered = filtereds[i];
            filteredSymbols.push({
                id: filtered.symbol,
                ...filtered,
                ...this.getSymbol(filtered.symbol),
            })
        }
        return filteredSymbols
    }

}

export default new appSymbols()