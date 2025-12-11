<script setup>
import { computed, ref } from 'vue';

const todos = ref([]);
const newTodo = ref();

// 新增待辦
function addTodo() {

    
// true false   0 null false / -1 1 '字串' true
    if(newTodo.value){
        todos.value
        .push({
            'id': Date.now(),
            'done': false,
            'itemName': newTodo.value
        });
    }

}

// 刪除待辦
// [1,2,3,4]    要刪除 3   撈取3以外的資料=> [1,2,4]
function removeTodo(removeId) {
    // 篩選非刪除的id放回原本的清單
    todos.value = todos.value.filter(x => x.id != removeId);
}

// 已經完成數量
const doneCount = computed(() => {
    return todos.value.filter(x => x.done).length;
})

// const item = {
//     id: 1,
//     done: true,
//     itemName,
// }

</script>

<template>

    <input v-model="newTodo"></input>
    <button class="btn btn-success" @click="addTodo()">新增</button>

    <table>
        <tbody>
            <tr v-for="(item, index) in todos" :key="item.id">
                <td>
                    <input type="checkbox" v-model="item.done"></input>
                </td>
                <td>
                    <span :class="{ done: item.done }">{{ item.itemName }}</span>
                </td>
                <td>
                    <button @click="removeTodo(item.id)"  class="btn btn-danger">刪除</button>
                </td>
            </tr>
        </tbody>
    </table>
    <span>共{{ todos.length }}項,已完成{{doneCount}}項</span>

</template>

<style>
.done {
    text-decoration: line-through;
}
</style>