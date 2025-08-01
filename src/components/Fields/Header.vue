<template>
    <div>
        <h1 v-if="!props.field.type || props.field.type === 'h1'" class="text-2xl font-bold" :class="props.field.class">{{ props.field.text }}</h1>
        <h2 v-if="props.field.type === 'h2'" class="text-xl font-bold" :class="props.field.class">{{ props.field.text }}</h2>
        <h3 v-if="props.field.type === 'h3'" class="text-lg font-bold" :class="props.field.class">{{ props.field.text }}</h3>
        <h4 v-if="props.field.type === 'h4'" class="font-bold text-md" :class="props.field.class">{{ props.field.text }}</h4>
    </div>
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