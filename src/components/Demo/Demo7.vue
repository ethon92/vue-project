<script setup>
import foodData from '@/data/food.json';
import { ref } from 'vue';
import studentData from '@/data/student.json'

const foodItemList = ref(foodData);
const selectedItem = ref(-1);

const student = ref(studentData[5])
</script>

<template>
    <select v-model="selectedItem">
        <option disabled value="-1">
            請選擇
        </option>
        <option v-for="(foodItem, index) in foodItemList" :key="foodItemList.id" :value="foodItem.id">{{
            `${index + 1}.${foodItem.name}` }}</option>
    </select>
    <hr>
    <ul>
        <li v-for="(value, key) in student">{{ `${key}: ${value}` }}</li>
    </ul>
</template>