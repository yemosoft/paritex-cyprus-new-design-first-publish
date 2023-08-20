import { createApp } from './app'
import * as NProgress from 'nprogress'
import appBase from './libs/appBase'



createApp().then(async (alltc) => {
    /**
     * Handle NProgress display on page changes
     */
    alltc.router.beforeEach((router) => {
        NProgress.start()
    })

    alltc.router.afterEach(() => {
        NProgress.done()
    })

    // wait for the app to be ready
    await alltc.router.isReady()

    // Load platform core data 

    await appBase.load()


    // finaly mount the app to the DOM
    alltc.app.mount('#main')
})
