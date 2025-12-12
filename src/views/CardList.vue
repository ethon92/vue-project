<script setup>
import Card from '@/components/Card.vue';
import pokemonData from '@/data/pokemon.json'
import { computed, ref } from 'vue';
const pokemonList = ref(pokemonData)

const pokemonItems = computed(() => {
    return pokemonList.value.map(x=> {
        return {
            name: x.name,
            number: x.number,
            image: x.image,
            types: splitArray(x.types)
        }
    })
})

function splitArray(type){
    return type.join('、')
}
</script>

<template>
    <div class="row row-cols-1 row-cols-md-5 g-4">
        <Card v-for="(pokemon, key) in pokemonItems" :key="pokemon.number" :name="pokemon.name" :number="pokemon.number" :types="pokemon.types">
            <template v-slot:pokemonImage>
                <img :src="pokemon.image" alt="pokemon image">
            </template>
        </Card>
    </div>
</template>

<style scoped></style>