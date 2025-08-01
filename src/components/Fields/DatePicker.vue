<template>
  <input 
    :type="props.field.dateType || 'date'"
    :name="props.field.name" 
    :class="props.field.class"
    :placeholder="props.field.placeholder || getPlaceholder()"
    :required="props.field.required"
    :min="props.field.minDate"
    :max="props.field.maxDate"
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

const getPlaceholder = () => {
  switch (props.field.dateType) {
    case 'datetime-local':
      return 'Select date and time'
    case 'month':
      return 'Select month'
    case 'week':
      return 'Select week'
    default:
      return 'Select date'
  }
}
</script>