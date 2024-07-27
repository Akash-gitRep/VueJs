import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue"
import ErrorDialog from './components/UI/ErrorDialog.vue'
import BaseButton from "./components/Layouts/BaseButton.vue"
const app=createApp(App)
app.component('base-card' ,BaseCard);
app.component('ErrorDialog' ,ErrorDialog);
app.component('BaseButton' ,BaseButton);
app.mount("#app");
