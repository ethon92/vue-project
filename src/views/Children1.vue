<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const props = defineProps({id: String})
</script>

<template>
    <h1>Children1</h1>
    <p>route: {{ route.params.id }}</p>
    <p>defineProps: {{ props.id }}</p>
</template>

<style scoped></style>