<script setup>
import Card from '@/components/Card.vue';
import pokemonData from '@/data/pokemon.json'
import { onMounted, ref } from 'vue';
const pokemonList = ref(pokemonData)
// console.log(pokemon.value.name)
// for (const p in pokemonData) {
//     console.log(p)
// }


// console.log(pokemonData[0].name)
</script>

<template>
    <!-- <div v-for="(mon, index) in pokemon" :key="index">
        <Card item="mon">{{ pokemon }}</Card>
    </div> -->
    <div v-for="(pokemon, key) in pokemonList" :key="pokemon.number">
        <!-- <p>{{ typeof(item.number) }}</p>
        <p>{{ typeof(item.image) }}</p>
        <p>{{ typeof(item.name) }}</p>
        <p>{{ item.types }}</p> -->
        <Card :pokemon="pokemon"></Card>
    </div>

</template>

<style scoped></style>