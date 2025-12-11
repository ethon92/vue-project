<script setup></script>

<template>
    <h1>Home</h1>
    <p>
        <RouterLink :to="{ 'name': 'Children1', 'params': {'id': 6}}">Children1-6</RouterLink> |
        <RouterLink :to="{ 'name': 'Children2', 'params': {'id': 10} }">Children2-10</RouterLink> |
        <RouterLink to="/Children1/HELLO">Children3-Hello</RouterLink> 
    </p>
    <RouterView></RouterView>
</template>

<style scoped></style>