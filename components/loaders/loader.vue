<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="d-flex justify-content-center align-items-center"
        style="width: 100%; hight: 100%"
    >
        <div
            class="spinner-border spinner-border-md m-3"
            :class="type"
            role="status"
        >
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: 'text-danger',
        },
    },
}
</script>

<style></style>
