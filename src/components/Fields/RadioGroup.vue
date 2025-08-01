<template>
  <div class="space-y-3">
    <div
      v-for="(option, index) in props.field.options"
      :key="index"
      class="flex items-center space-x-3"
    >
      <input 
        :id="`${props.field.name}_${index}`"
        :name="props.field.name"
        :value="option.value"
        :class="props.field.class"
        :required="props.field.required"
        type="radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label 
        :for="`${props.field.name}_${index}`"
        class="text-sm text-slate-700 cursor-pointer"
      >
        {{ option.label || `Option ${index + 1}` }}
      </label>
    </div>
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