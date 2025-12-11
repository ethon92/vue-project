<script setup>
    const divClick = () => alert('Div被點擊了');
    const btnClick = () => alert('按鈕被點擊了');
</script>

<template>
    <div @click="divClick" style="background-color: gold;">
        <button @click.stop="btnClick">點我</button>
    </div>
    <!-- 用self modifier指定只有點到element才會觸發事件 -->
    <div @click.self="divClick" style="background-color: gray;">
        <button @click.middle="btnClick">點我</button>
    </div>

    <button @click.ctrl="btnClick">ctrl</button>
    <button @click.ctrl.alt="btnClick">ctrl+alt</button>
    <button @click.ctrl.exact="btnClick">only ctrl</button>
</template>