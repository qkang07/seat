<script setup lang="ts">
import type { IField, RenderField } from './types';
import FieldContainer from './FieldContainer.vue';
import { ref } from 'vue';

const {fields, filledValue} = defineProps<{
  fields: RenderField[],
  filledValue: Record<string, any> 
}>()

const value = ref(filledValue)

const add = (index: number) => {

}

const remove = (index: number) => {

}

const swap = (i1: number, i2: number) => {
  
}

</script>
<template>
<div class="list-renderer">
  <FieldContainer 
    :key="field.renderKey" 
    v-for="field in fields" 
    :field="field.field"
    
    />
</div>
</template>
<style scoped lang="less">

</style>