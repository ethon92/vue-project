<script setup>
import { nextTick, ref } from 'vue';

const count = ref(0);

    function click() {
        count.value++;
        console.log(document.querySelector('#p').innerText);
        nextTick(() => console.log("nextTick內", document.querySelector('#p').textContent));
    }
</script>

<template>
    <p id="p">
        {{ count }}
    </p>
    <button @click="click">加一</button>
</template>

<style scoped></style>