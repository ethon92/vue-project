<script setup>
import { computed, ref } from 'vue';
import studentData from '@/data/student.json';
const student = ref(studentData[0]);

const fnTotalScore = () => {
    return student.value.chinese + student.value.english + student.value.math;
};

const totalScore = computed(() => {
    return student.value.chinese + student.value.english + student.value.math
})
</script>

<template>
    <ul>
        <li>姓名: {{ student.name }}</li>
        <li>國文: <input type="number" v-model="student.chinese"></li>
        <li>英文: <input type="number" v-model="student.english"></li>
        <li>數學: <input type="number" v-model="student.math"></li>
        <li>總分:{{ fnTotalScore() }}</li>
        <li>{{ totalScore }}</li>
    </ul>
</template>

<style scoped></style>