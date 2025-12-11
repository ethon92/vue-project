<script setup>
import { reactive, ref } from 'vue';
import { AbilityPoint } from '@/common/ability-point';

const apRef = ref(AbilityPoint.generateRandom());
const changeApRef = () => apRef.value = AbilityPoint.generateRandom();

const apReactive = reactive(AbilityPoint.generateRandom());
const changeApReactive = () => {
    const ap = AbilityPoint.generateRandom();
    apReactive.str = ap.str;
    apReactive.dex = ap.dex;
    apReactive.int = ap.int;
    apReactive.luk = ap.luk;
}

</script>

<template>
    <div>
        <li>力量: {{ apRef.str}}</li>
        <li>敏捷: {{ apRef.dex }}</li>
        <li>智力: {{ apRef.int}}</li>
        <li>幸運: {{ apRef.luk}}</li>
    </div>
    <button @click="changeApRef()">ref擲骰</button>

    <div>
        <li>力量: {{ apRef.str}}</li>
        <li>敏捷: {{ apRef.dex }}</li>
        <li>智力: {{ apRef.int}}</li>
        <li>幸運: {{ apRef.luk}}</li>
    </div>
    <button @click="changeApReactive()">reactive擲骰</button>
</template>

<style scoped></style>