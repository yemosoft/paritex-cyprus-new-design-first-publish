
export interface ISymbol {
    base: string
    qoute: string
    exchange?: string
    nameCurrency?: string
    symbol: string
}

export interface ISymbols {
    [key: string]: ISymbol;
}

const supportedSymbols: ISymbols = {
    BTCUSDT: {
        base: 'BTC',
        qoute: 'USDT',
        exchange: 'binance',
        nameCurrency: 'Bitcoin',
        symbol: 'BTCUSDT',
    },
    ETHUSDT: {
        base: 'ETH',
        qoute: 'USDT',
        nameCurrency: 'Ethereum',
        exchange: 'binance',
        symbol: 'ETHUSDT',
    },
    XRPUSDT: {
        base: 'XRP',
        qoute: 'USDT',
        nameCurrency: 'Ripple',
        exchange: 'binance',
        symbol: 'XRPUSDT',
    },
    ADAUSDT: {
        base: 'ADA',
        qoute: 'USDT',
        nameCurrency: 'Cardano',
        exchange: 'binance',
        symbol: 'ADAUSDT',
    },
    SOLUSDT: {
        base: 'SOL',
        qoute: 'USDT',
        nameCurrency: 'Solana',
        exchange: 'binance',
        symbol: 'SOLUSDT',
    },
    TRXUSDT: {
        base: 'TRX',
        qoute: 'USDT',
        nameCurrency: 'Tron',
        exchange: 'binance',
        symbol: 'TRXUSDT',
    },
    LTCUSDT: {
        base: 'LTC',
        qoute: 'USDT',
        nameCurrency: 'Litecoin',
        exchange: 'binance',
        symbol: 'LTCUSDT',
    }
}

export {
    supportedSymbols
}
