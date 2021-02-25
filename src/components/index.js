import Vue from "vue";
import FormBuilder from "./FormBuilder.vue";
import FormRender from "./FormRender.vue";
import '../index.css'

const Components = {
    FormBuilder,
    FormRender
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;