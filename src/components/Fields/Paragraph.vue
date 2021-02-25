<template>
    <p :class="field.class">{{ field.textarea }}</p>
</template>

<script>
export default {
    props: {
        field: Object
    }
}
</script>