<template>
    <p :class="props.field.class">{{ props.field.textarea || 'Paragraph text...' }}</p>
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