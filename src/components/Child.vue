<script setup>
    // 接收Parent的data
const props = defineProps({
    'title': String,
    'msg': {
        type: String,
        required: true
    },
    'count': { type: Number, default: 5 }
})

// 要傳給Parent的data
const emit = defineEmits(['childClickEvent'])
function handleClick() {
    emit('childClickEvent', '這是用emit傳遞的訊息')
}
</script>

<template>
    <h1>Child</h1>
    <h2>{{ props.title }}</h2>
    <p>{{ props.msg }}</p>
    <p>{{ props.count }}</p>
    <button @click="handleClick">click me!!</button>
</template>

<style scoped></style>