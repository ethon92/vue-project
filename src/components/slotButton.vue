<script setup></script>

<template>
    <slot name="leftIcon">123</slot>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        background-color: rgb(14, 25, 179);
        color: wheat;
    }
</style>