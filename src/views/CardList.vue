<script setup>
import Card from '@/components/Card.vue';
import pokemonData from '@/data/pokemon.json'
import { computed, ref } from 'vue';
const pokemonList = ref(pokemonData)

// 整理pokemon資料格式
const pokemonItems = computed(() => {
    return pokemonList.value.map(x => {
        return {
            name: x.name,
            number: x.number,
            image: x.image,
            types: splitArray(x.types)
        }
    })
})

function splitArray(type) {
    return type.join('、')
}

// 搜尋功能
const searchName = ref('')
function search(){
    pokemonList.value = pokemonData.filter(x => x.name.includes(searchName.value));
}
</script>

<template>
    <div class="m-2">
        <h1>寶可夢圖鑑</h1>
        <span>蒐尋寶可夢名字 : </span>
        <input type="text" v-model="searchName" @keyup="search">{{ searchName }}
    </div>
    <div class="row row-cols-1 row-cols-md-5 g-4">
        <Card v-for="(pokemon, key) in pokemonItems" :key="pokemon.number" :name="pokemon.name" :number="pokemon.number"
            :types="pokemon.types">
            <template v-slot:pokemonImage>
                <img :src="pokemon.image" alt="pokemon image">
            </template>
        </Card>
    </div>
</template>

<style scoped></style>