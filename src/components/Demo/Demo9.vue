<script setup>
import { ref } from 'vue';

const isShow = ref(false)
</script>

<template>
    <h1>Transition</h1>
    <button @click="isShow = !isShow">切換</button>
    <Transition>
        <h2 v-show="isShow">HELLO</h2>
    </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
    opacity: 0.3;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 3s ease-in;
}
</style>