import { createApp } from 'vue';
import '@/assets/styles/main.scss';
import '@/plugins/mockServiceWorker';
import App from '@/App.vue';
import { registerPlugins } from '@/plugins';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');