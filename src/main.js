import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

defineIonPhaser(window)

createApp(App).use(router).use(store).mount('#app')
