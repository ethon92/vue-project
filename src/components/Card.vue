<script setup>
import { ref } from 'vue';
const props = defineProps(['pokemon'])
const types = ref('')

</script>

<template>
    <div class="row row-cols-md-4 g-4">
        <div class="col">
            <div class="card">
                <img :src="props.pokemon.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">名字: {{ props.pokemon.name }}</h5>
                    <h5 class="card-title">屬性: {{ props.pokemon.types.join('、') }}</h5>
                    <h5 class="card-title">編號: {{ props.pokemon.number }}</h5>
                </div>
            </div>
        </div>
        <!-- <div class="col">
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div> -->
        <!-- <div class="col">
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div> -->
    </div>

</template>

<style scoped>

</style>