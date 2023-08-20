import { Model } from "@vuex-orm/core";

export default class Ticker extends Model {
    static entity = "ticker";

    static index = ['symbol']

    static fields() {
        return {
            id: this.string(""),
            symbol: this.string(""),
            priceChange: this.number(0),
            priceChangePercent: this.number(0),
            lastPrice: this.number(0),
            nameCurrency: this.string(""),
            base: this.string(""),
        };
    }
}