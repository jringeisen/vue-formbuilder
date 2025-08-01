<template>
  <div class="flex items-center space-x-3">
    <input 
      :id="props.field.name"
      :name="props.field.name" 
      :class="props.field.class"
      :required="props.field.required"
      :checked="props.field.checked"
      type="checkbox"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
    />
    <label 
      :for="props.field.name"
      class="text-sm text-slate-700 cursor-pointer"
    >
      {{ props.field.checkboxLabel || 'Checkbox label' }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  field: {
    type: Object,
    required: true
  }
})
</script>