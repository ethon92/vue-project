<script setup>
const msg = '比起v-html較安全的作法!!';
const msg1 = '這是用v-html產生的文字!! 可能會有Cross-Site-Scripting攻擊!!';
let i = 1;
const multiple = (a, b) => { return a * b };

</script>

<template>
    <p class="safe">{{ msg }}</p>
    <p v-html="msg1" class="danger"></p>
    <p>{{ i + 1 }}</p>
    <p>{{ multiple(3, 5) }}</p>
</template>

<style scoped>
    .danger {
        color: red;
    }

    .safe {
        color: green;
    }
</style>
