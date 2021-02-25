<template>
  <div id="app" class="flex w-full mt-20">
    <div class="w-1/2">
      <h1 class="pb-6 text-2xl font-semibold text-center text-gray-800">Vue FormBuilder</h1>
      <form-builder @form="handleForm" />
    </div>

    <div class ="w-1/2">
      <h1 class="pb-6 text-2xl font-semibold text-center text-gray-800">Vue FormRender</h1>
      <form-render :form-json="renderForm" />
    </div>
  </div>
</template>

<script>
import FormBuilder from './components/FormBuilder';
import FormRender from './components/FormRender';
export default {
  components: {
    FormBuilder,
    FormRender
  },

  data () {
    return {
      renderForm: ''
    }
  },

  methods: {
    handleForm (payload) {
      this.renderForm = payload
    }
  }
}
</script>
