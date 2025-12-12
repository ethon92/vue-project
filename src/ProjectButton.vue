<script setup>
import { computed, ref } from 'vue';

const props = defineProps(['type']);
const emit = defineEmits(['projClick']);

const displayName = ref();
// search add delete

const buttonDisplay = ref({
    'name': '',
    'icon': '',
    'class': ''
});

switch (props.type) {
    case 'search':
        buttonDisplay.value = { 'name': '搜尋', 'icon': 'bi bi-search-heart', 'class': 'btn btn-info' }
        // buttonDisplay.value.name = '搜尋';
        // buttonDisplay.value.icon = ''
        break;
    case 'add':
        buttonDisplay.value = { 'name': '新增', 'icon': 'bi bi-plus-circle', 'class': 'btn btn-success' }
        // buttonDisplay.value.name = '新增';
        // buttonDisplay.value.icon = 'bi bi-plus-circle';
        break;
}

const buttonDisplay2 = computed(() => {
    switch (props.type) {
        case 'search':
            return {
                'name': '搜尋',
                'icon': 'bi bi-search-heart',
                'class': 'btn btn-info'
            }
        case 'add':
            return {
                'name': '新增',
                'icon': 'bi bi-plus-circle',
                'class': 'btn btn-success'
            }
    }
})

</script>

<template>
    <button :class="buttonDisplay2.class" @click="emit('projClick')">
        <i :class="buttonDisplay2.icon"></i> {{ buttonDisplay2.name }}
    </button>
</template>

<style scoped></style>