<template>
    <select :name="field.name" :class="field.class" :required="field.required">
        <option v-for="(option, index) in field.options" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script>
export default {
    props: {
        field: Object
    }
}
</script>