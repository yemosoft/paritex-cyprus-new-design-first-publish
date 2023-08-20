import { DefaultLogger } from "binance";

export default {
    ...DefaultLogger,
    error: () => { },
    silly: (...params) => { },
    info: (...params) => { },
    warning: (...params) => { },
    notice: (...params) => { }
};
