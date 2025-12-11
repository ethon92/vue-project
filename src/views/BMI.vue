<script setup>
import { nextTick, ref } from 'vue';
const height = ref();
const weight = ref();
const result = ref();
const isHidden = ref(true);

function calBmi(){
    result.value = Math.round(weight.value/(height.value/100)**2) ;
    isHidden.value = false;
}

</script>

<template>
    <p>身高(公分):</p><input type="number" v-model="height">
    <p>體重(公斤):</p><input type="number" v-model="weight">
    <br>
    <br>
    <button @click="calBmi()">計算</button>
    <p>您的BMI: <span :hidden="isHidden">{{ result }}</span></p>
</template>

<style scoped></style>
