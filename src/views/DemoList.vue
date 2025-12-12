<script setup>
import ComputedProperty from '@/components/Demo/ComputedProperty.vue';
import Demo from '@/components/Demo/Demo.vue';
import Demo1 from '@/components/Demo/Demo1.vue';
import Demo2 from '@/components/Demo/Demo2.vue';
import Demo3 from '@/components/Demo/Demo3.vue';
import Demo4 from '@/components/Demo/Demo4.vue';
import Demo5 from '@/components/Demo/Demo5.vue';
import Demo6 from '@/components/Demo/Demo6.vue';
import Demo7 from '@/components/Demo/Demo7.vue';
import Demo8 from '@/components/Demo/Demo8.vue';
import Demo9 from '@/components/Demo/Demo9.vue';
import TwoWayBinding from '@/components/Demo/TwoWayBinding.vue';
import Watch from '@/components/Demo/Watch.vue';
import { ref } from 'vue';

const array = [Demo, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7, Demo8, Demo9, TwoWayBinding, ComputedProperty, Watch];
const selected = ref();
</script>

<template>
    <h1>Demo List</h1>
    <select v-model="selected">
        <option v-for="(item, index) in array" :value="index">{{ item.__name }}</option>
    </select>
    <KeepAlive>
        <component :is="array[selected]"></component>
    </KeepAlive>

</template>