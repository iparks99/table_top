import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

defineIonPhaser(window)

createApp(App).use(router).mount('#app')
