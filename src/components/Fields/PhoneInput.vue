<template>
  <div class="flex">
    <select
      v-if="props.field.showCountryCode"
      :name="`${props.field.name}_country`"
      class="flex-shrink-0 px-3 py-2 border border-r-0 border-slate-300 rounded-l-md bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="+1">🇺🇸 +1</option>
      <option value="+44">🇬🇧 +44</option>
      <option value="+33">🇫🇷 +33</option>
      <option value="+49">🇩🇪 +49</option>
      <option value="+81">🇯🇵 +81</option>
      <option value="+86">🇨🇳 +86</option>
      <option value="+91">🇮🇳 +91</option>
      <option value="+61">🇦🇺 +61</option>
      <option value="+55">🇧🇷 +55</option>
      <option value="+7">🇷🇺 +7</option>
    </select>
    <input
      type="tel"
      :name="props.field.name"
      :placeholder="props.field.placeholder || getPlaceholder()"
      :required="props.field.required"
      :pattern="props.field.pattern"
      :autocomplete="props.field.autocomplete || 'tel'"
      :class="[
        'flex-1 px-3 py-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors',
        props.field.class,
        props.field.showCountryCode ? 'rounded-r-md' : 'rounded-md'
      ]"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  field: {
    type: Object,
    required: true
  }
})

const getPlaceholder = () => {
  if (props.field.showCountryCode) {
    return '(555) 123-4567'
  }
  return '+1 (555) 123-4567'
}
</script>
