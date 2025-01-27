import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

const app = createApp(App)
createApp(App).mount('#app')
app.component('food-item', FoodItem)