<script setup>
import Demo from '@/components/Demo/Demo.vue';
import Demo1 from '@/components/Demo/Demo1.vue';
import Demo2 from '@/components/Demo/Demo2.vue';
import Demo3 from '@/components/Demo/Demo3.vue';
import Demo4 from '@/components/Demo/Demo4.vue';
import { ref } from 'vue';

const array = [Demo, Demo1, Demo2, Demo3, Demo4]
const selected = ref()
</script>

<template>
    <select v-model="selected">
        <option v-for="(item, index) in array" :value="index">{{ item.__name }}</option>
    </select>
    <KeepAlive>
        <component :is="array[selected]"></component>
    </KeepAlive>

</template>