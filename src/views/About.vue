<script setup>
import CustomButton from '@/components/CustomButton.vue';
import { useCounterStore } from '@/stores/counter';
import { onUnmounted } from 'vue';
const counterStore = useCounterStore();

// 切換頁面時將count歸零
onUnmounted(() => {
    counterStore.resetCount()
})
</script>

<template>
    <h1>About</h1>
    <p>StoreCount: {{ counterStore.count }}</p>
    <p>SqureCount: {{ counterStore.squareCount }}</p>
    <CustomButton @customBtnClick="counterStore.addCount()" type="addOne"></CustomButton>
</template>

<style scoped></style>