import { createApp as createClientApp, h, Suspense } from 'vue'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import Notifications from 'notiwind'

// @ts-ignore
import alltcApp from './App.vue'

import 'preline'
import VuexORM from "@vuex-orm/core";
import Vuex from "vuex";
import i18n from "./i18n"

import './styles'

export type alltcAppContext = Awaited<ReturnType<typeof createApp>>


import Ticker from './stores/models/tickers'


export async function createApp() {
  const head = createHead()
  const router = createRouter()
  const pinia = createPinia()

  const app = createClientApp({
    // This is the global app setup function
    setup() {
      return () => {
        return h(Suspense, null, {
          default: () => h(alltcApp),
        })
      }
    },
  })

  const alltc = {
    app,

    router,
    head,
    pinia,
  }


  app.use(alltc.pinia)
  app.use(alltc.head)



  app.use(alltc.router)
  app.use(i18n)

  app.use(Notifications)

  const database = new VuexORM.Database();
  database.register(Ticker);

  const store = new Vuex.Store({
    plugins: [VuexORM.install(database)],
  });

  app.use(store)
  return alltc
}
