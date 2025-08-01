<template>
    <select :name="props.field.name" :class="props.field.class" :required="props.field.required">
        <option v-for="(option, index) in props.field.options" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script setup>
// Define props with proper typing
const props = defineProps({
    field: {
        type: Object,
        required: true
    }
})
</script>