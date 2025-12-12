<script setup>
import { computed } from 'vue';

const props = defineProps({ 'name': String, 'number': Number, 'types': Array, 'img': String })

</script>

<template>
    <div class="col">
        <div class="card border-primary border-opacity-50 border-2 rounded">
            <slot name="pokemonImage"></slot>
            <!-- <img :src="props.img" class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">名字: {{ props.name }}</h5>
                <h5 class="card-title">屬性: {{ props.types.join('、') }}</h5>
                <h5 class="card-title">編號: {{ props.number }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped></style>