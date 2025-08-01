<template>
    <input :type="props.field.type" :name="props.field.name" :class="props.field.class" :placeholder="props.field.placeholder" :required="props.field.required" :autocomplete="props.field.autocomplete">
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