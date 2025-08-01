<template>
  <input 
    type="time"
    :name="props.field.name" 
    :class="props.field.class"
    :placeholder="props.field.placeholder || 'Select time'"
    :required="props.field.required"
    :min="props.field.minTime"
    :max="props.field.maxTime"
    :step="props.field.step || '300'"
    :autocomplete="props.field.autocomplete"
    class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
  />
</template>

<script setup>
const props = defineProps({
  field: {
    type: Object,
    required: true
  }
})
</script>