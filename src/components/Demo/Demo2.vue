<script setup>
function printLog(event) {
    console.log('測試成功!!');
    console.log(event)
}

</script>

<template>
    <button @click="printLog">按鈕Method</button>
    <button @click="printLog($event)">按鈕Inline1</button>
    <button @click="(e) => { console.log(e) }">按鈕Inline2</button>
</template>

<style scoped></style>