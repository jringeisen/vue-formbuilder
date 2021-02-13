import Vue from "vue";
import FormBuilder from "./FormBuilder.vue";

const Components = {
    FormBuilder
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;