<template>
    <input :type="field.type" :name="field.name" :class="field.class" :placeholder="field.placeholder" :required="field.required" :autocomplete="field.autocomplete">
</template>

<script>
export default {
    props: {
        field: Object
    }
}
</script>