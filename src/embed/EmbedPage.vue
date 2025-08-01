<template>
  <StandaloneFormRender 
    :form-id="formId"
    :endpoint="endpoint"
    :theme="theme"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StandaloneFormRender from './StandaloneFormRender.vue'

const route = useRoute()

// Extract parameters from route
const formId = computed(() => route.params.id)
const endpoint = computed(() => route.query.endpoint || '')
const theme = computed(() => route.query.theme || 'default')
</script>

<style>
/* Global styles for embed page */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

#app {
  height: 100%;
}
</style>