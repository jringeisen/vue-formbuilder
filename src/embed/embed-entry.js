import { createApp } from 'vue'
import router from '../router'
import EmbedPage from './EmbedPage.vue'
import '../index.css'

// Create a minimal app for embed pages
const app = createApp({
  template: '<router-view />'
})

app.use(router)
app.mount('#app')

// Export for library usage
export { EmbedPage, router }