<script setup>
const myClass = 'text';
const url = 'https://google.com';
let isDisable = false;

const attrObj = {
    'id': 'myId',
    'class': 'myClass',
    'style': 'border: 1px solid black'
}

</script>

<template>
    <h1 :bind="myClass">測試v bind</h1>
    <a :href="url" target="_blank">Google</a>
    <br>
    <br>
    <button :disabled="isDisable">送出</button>
    <h1 v-bind="attrObj">v-bind物件綁定</h1>
    <h1 :class="attrObj.class">單一屬性v-bind物件</h1>
</template>

<style scoped>
.myClass {
    color: aqua;
}
</style>