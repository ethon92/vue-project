<script setup>
import memberData from '@/data/member.json'
import { ref, watch, watchEffect } from 'vue';

const member = ref(memberData[0]);
const changeAge = () => {
    member.value.age++
}
const changeMember = () => {
    const index = Math.floor(Math.random() * 10);
    member.value = memberData[index];
}

// watch(member, (newVal, oldVal)=> console.log("資料改變了!!", newVal, oldVal))
// 監聽物件內部的屬性
watch(() => member.value.age, (newVal, oldVal)=> console.log("資料改變了!!", newVal, oldVal))

const name = ref('John');
const age = ref(20);

watchEffect(()=>{
    console.log('姓名改變了!!', name.value);
    console.log('年齡改變了!!', age.value);
})
</script>

<template>
    <h1>姓名:
        {{ member.name }}
    </h1>
    <h2>年齡: {{ member.age }}</h2>
    <button @click="changeAge()">年齡加一</button>
    <button @click="changeMember">換會員</button>
    <hr>
    <input type="text" v-model="name">
    <input type="number" v-model="age">

</template>

<style scoped></style>