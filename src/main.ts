import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

// antdv ui
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// uno
import 'virtual:uno.css';

import pinia from './pinias/index.ts';

const app = createApp(App);
app.use(router).use(Antd).use(pinia);

app.mount('#dedsi-app')
