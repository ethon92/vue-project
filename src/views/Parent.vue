<script setup>
import Child from '@/components/Child.vue';
import CustomButton from '@/components/CustomButton.vue';
import SlotButton from '@/components/slotButton.vue';
function handleChildClick(data) {
    console.log(data)
}
</script>

<template>
    <h1>Parent</h1>
    <Child title="傳遞props" msg="這是要往子組件傳遞的訊息" @childClickEvent="handleChildClick($event)"></Child>

    <SlotButton>
        <template v-slot:leftIcon></template>
        切換
    </SlotButton>

    <hr>

    <CustomButton type="delete"></CustomButton>
    <CustomButton type="add"></CustomButton>

</template>

<style scoped></style>