import { createApp } from 'vue'
import './style.css'
import store from "./store/store.js";

import App from './App.vue'

const app = createApp(App);

app.use(store);
app.mount('#app');
