import FormBuilder from "./FormBuilder.vue";
import FormRender from "./FormRender.vue";
import '../index.css'

const Components = {
    FormBuilder,
    FormRender
}

// Install function for Vue.use()
const install = (app) => {
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name]);
    });
}

// Export individual components
export { FormBuilder, FormRender }

// Export plugin with install function
export default {
    install,
    ...Components
}