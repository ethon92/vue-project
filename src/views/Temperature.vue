<script setup>
import { ref, watch } from 'vue';
const temp = ref(32);
const style = ref({"color": "blue"});

function changeTemp() {
    const result = (temp.value-32)*(5/9);
    
    if (result<20) {
        style.value.color = "blue";
    } else if (result>20 && result<30){
        style.value.color = "black";
    } else if (result>30) {
        style.value.color = "red";
    }
    return result
}
</script>

<template>
    <p>華氏溫度:</p><input type="number" v-model="temp">
    <div>攝氏溫度: <span :style="style">{{ changeTemp() }}</span></div>
</template>

<style scoped></style>