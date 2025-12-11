<script setup>
import studentData from '@/data/student.json'
import { ref } from 'vue';
const studentList = ref(studentData);
const name = ref('');
const searchName = () => {
    const result = studentData.filter((student) => {
        return student.name.toLowerCase() == name.value
    })

    if (result.length == 0) {   
        studentList.value = studentData;
    } else if (result) {
        studentList.value = result;       
    }
}
</script>

<template>
    <div class="search">
        <span>名字搜尋: </span><input type="text" v-model="name" @input="searchName()">
        {{ name }}
    </div>
    <table class="tb">
        <thead>
            <tr>
                <th colspan="4">學生成績</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-center">
                <th>名字</th>
                <th>國文</th>
                <th>英文</th>
                <th>數學</th>
            </tr>
            <tr v-for="student in studentList" class="text-center">
                <td>{{ student.name }}</td>
                <td>{{ student.chinese }}</td>
                <td>{{ student.english }}</td>
                <td>{{ student.math }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.search {
    margin: 2rem;
    text-align: center;
}

.tb {
    margin: auto;
    border: 1px solid black;
}

.text-center {
    text-align: center;
    border: 1px solid black;
}

td,
th {
    border: 1px solid black;
}

table {
    border-collapse: collapse;
}
</style>