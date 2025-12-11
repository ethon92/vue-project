<script setup>
const props = defineProps({'pokemon': Object});

</script>

<template>
    <div class="col">
        <div class="card border-primary border-opacity-50 border-2 rounded">
            <img :src="props.pokemon.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">名字: {{ props.pokemon.name }}</h5>
                <h5 class="card-title">屬性: {{ props.pokemon.types.join('、') }}</h5>
                <h5 class="card-title">編號: {{ props.pokemon.number }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped></style>