import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import bridge from '@vkontakte/vk-bridge';
bridge.send('VKWebAppInit').then(({result}) => {
   if(result) {
       console.log("VKWebAppInit")
   }
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
