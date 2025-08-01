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

<script setup>
import { ref } from 'vue'
import FormBuilder from './components/FormBuilder.vue'
import FormRender from './components/FormRender.vue'

const renderForm = ref('')

const handleForm = (payload) => {
  renderForm.value = payload
}
</script>
