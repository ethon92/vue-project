<script setup>
import Demo from './components/Demo/Demo8.vue';

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink :to="{ 'name': 'Home' }" class="nav-link">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ 'name': 'About' }" class="nav-link">關於我們</RouterLink>
          </li>
          <li class="nav-item">
              <RouterLink :to="{ 'name': 'BMI' }" class="nav-link">計算BMI</RouterLink> 
          </li>
          <li class="nav-item">
            <RouterLink :to="{ 'name': 'Temperature' }" class="nav-link">華氏轉攝氏</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ 'name': 'Lifecycle' }" class="nav-link">生命週期</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ 'name': 'DemoList' }" class="nav-link">測試清單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ 'name': 'ToDoList' }" class="nav-link">待辦清單</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <RouterView></RouterView>
  </div>
  <hr />
  <!-- <Demo> -->
  <!-- </Demo> -->
</template>

<style scoped></style>
