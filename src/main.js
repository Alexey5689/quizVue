import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI';
import store from './store';//?
import router from './router/router';

const app = createApp(App);
 components.forEach(component => {
    app.component(component.name, component);
 });
console.log(components);

app .use(router)
    .use(store)
    .mount('#app')
