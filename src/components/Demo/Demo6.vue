<script setup>
import { ref } from 'vue';

const score = ref(0);
const isLogin = ref(true);
const visible = ref(false);
</script>

<template>
    <input type="number" v-model="score">
    <p v-if="score >= 60">及格</p>
    <p v-else-if="score >= 50">可補考</p>
    <p v-else>不及格</p>
    <hr>
    <button @click="isLogin = !isLogin">切換登入/登出</button>
    <template v-if="isLogin">
        <h1>Hello!! 歡迎登入!!</h1>
    </template>
    <template v-else>
        <h1>你已登出!!</h1>
    </template>
    <hr>
    <button @click="visible = !visible">
        {{ visible ? '隱藏內容':'顯示內容' }}
    </button>
    <p v-show="visible">成功拉!!!</p>
</template>