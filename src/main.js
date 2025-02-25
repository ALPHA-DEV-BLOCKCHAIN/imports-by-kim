import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import router from './routes'

import store from '@/store' //add this

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
 components,
 directives,
})



createApp(App).use(router).use(vuetify).use(store).mount('#app') //ensure to use vuetify