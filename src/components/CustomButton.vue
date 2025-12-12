<script setup>
import { computed, ref } from 'vue';

const props = defineProps(['type']);

// 建立響應式資料
const buttonDisplay = ref({
    'name': '',
    'class': '',
    'icon': ''
})
// 設定切換條件
switch (props.type) {
    case 'add':
        buttonDisplay.value = { 'name': '新增', 'icon': 'bi bi-plus-lg', 'class': 'btn btn-primary' }
        break;
    case 'delete':
        buttonDisplay.value = { 'name': '刪除', 'class': 'btn btn-danger', 'icon': 'bi bi-x-lg' }
        break;

}

// 利用computed顯示button
const buttonDisplay2 = computed(() => {
    switch (props.type) {
    case 'add':
        return { 'name': '新增', 'icon': 'bi bi-plus-lg', 'class': 'btn btn-primary' }
    case 'delete':
        return { 'name': '刪除', 'class': 'btn btn-danger', 'icon': 'bi bi-x-lg' }

}
})

</script>

<template>
    <button :class="buttonDisplay2.class"><i :class="buttonDisplay2.icon"></i>{{ buttonDisplay2.name }}</button>
</template>

<style scoped></style>