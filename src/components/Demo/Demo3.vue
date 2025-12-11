<script setup>
import { reactive, ref } from 'vue';
const num = ref(0);
const addCount = () => num.value++;
const textColor = reactive({ 'color': 'red' });
const changeColor = () => {
    const colors = ['red', 'navy', 'white', 'grey'];
    const randomIndex = Math.floor(Math.random() * colors.length)
    textColor.color = colors[randomIndex];
}

</script>

<template>
    <p>{{ num }}</p>
    <button @click="addCount()">加一</button>
    <button :style="textColor" @click="changeColor()">{{ textColor.color }}</button>
</template>

<style scoped></style>