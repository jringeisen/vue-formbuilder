<template>
    <div>
        <h1 v-if="!field.type || field.type === 'h1'" class="text-2xl font-bold" :class="field.class">{{ field.text }}</h1>
        <h2 v-if="field.type === 'h2'" class="text-xl font-bold" :class="field.class">{{ field.text }}</h2>
        <h3 v-if="field.type === 'h3'" class="text-lg font-bold" :class="field.class">{{ field.text }}</h3>
        <h4 v-if="field.type === 'h4'" class="font-bold text-md" :class="field.class">{{ field.text }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        field: Object
    }
}
</script>