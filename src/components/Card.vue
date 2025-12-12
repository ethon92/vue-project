<script setup>
// 定義接收的props
const props = defineProps({ 'name': String, 'number': Number, 'types': String, 'img': String })

</script>

<template>
    <div class="col">
        <div class="card border-primary border-opacity-50 border-2 rounded">
            <slot name="pokemonImage"></slot>
            <div class="card-body">
                <h5 class="card-title">名字: {{ props.name }}</h5>
                <h5 class="card-title">屬性: {{ props.types }}</h5>
                <h5 class="card-title">編號: {{ props.number }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped></style>