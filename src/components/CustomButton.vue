<script setup>
import { computed, ref } from 'vue';
// 接收props資料
const props = defineProps(['type']);
// 傳送emit事件
const emit = defineEmits(['customBtnClick'])

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
    case 'addOne':
        return { 'name': '增加一', 'class': 'btn btn-success', 'icon': 'bi bi-plus-lg' }

}
})

</script>

<template>
    <button :class="buttonDisplay2.class" @click="emit('customBtnClick')"><i :class="buttonDisplay2.icon"></i>{{ buttonDisplay2.name }}</button>
</template>

<style scoped></style>