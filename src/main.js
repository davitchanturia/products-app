import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router.js'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount('#app');
