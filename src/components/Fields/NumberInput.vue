<template>
  <div class="relative">
    <input 
      type="number"
      :name="props.field.name" 
      :class="props.field.class"
      :placeholder="props.field.placeholder || 'Enter number'"
      :required="props.field.required"
      :min="props.field.min"
      :max="props.field.max"
      :step="props.field.step || '1'"
      :autocomplete="props.field.autocomplete"
      class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
    />
    <div v-if="props.field.prefix || props.field.suffix" class="absolute inset-y-0 flex items-center pointer-events-none">
      <span v-if="props.field.prefix" class="left-0 pl-3 text-slate-500 text-sm">
        {{ props.field.prefix }}
      </span>
      <span v-if="props.field.suffix" class="right-0 pr-3 text-slate-500 text-sm">
        {{ props.field.suffix }}
      </span>
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