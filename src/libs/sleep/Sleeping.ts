export default class Sleeping {

    public static sleep(time: number, log: boolean = false) {
        return new Promise((resolve) => { setTimeout(resolve, time) })
    }

}

export const sleep = Sleeping.sleep