<script setup>
import Card from '@/components/Card.vue';
import pokemonData from '@/data/pokemon.json'
import { ref } from 'vue';
const pokemonList = ref(pokemonData)
</script>

<template>
    <div class="row row-cols-1 row-cols-md-5 g-4">
        <Card v-for="(pokemon, key) in pokemonList" :key="pokemon.number" :pokemon="pokemon"></Card>
    </div>
</template>

<style scoped></style>