import { defineClientConfig } from '@vuepress/client'
import Footer from './components/Footer.vue'
import MapResto from './components/MapResto.vue'
import Button from './components/Button.vue'
import ButtonTelegram from './components/ButtonTelegram.vue'
import ButtonBuyCoffee from './components/ButtonBuyCoffee.vue'
import ButtonGoLive from './components/ButtonGoLive.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MapResto', MapResto)
    app.component('Button', Button)
    app.component('ButtonTelegram', ButtonTelegram)
    app.component('ButtonBuyCoffee', ButtonBuyCoffee)
    app.component('ButtonGoLive', ButtonGoLive)
  },
  setup() {},
  rootComponents: [Footer],
})
