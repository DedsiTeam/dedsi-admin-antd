import { createApp } from 'vue'
import App from './App.vue'

// Antdv UI
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// uno
import 'virtual:uno.css';

const app = createApp(App);
app.use(Antd);

app.mount('#dedsi-app')
