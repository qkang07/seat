<script setup lang="ts">
import type { IField, RenderField } from './types';
import FieldContainer from './FieldContainer.vue';
import { ref } from 'vue';

const {fields, filledValue} = defineProps<{
  fields: RenderField[],
  filledValue: Record<string, any> 
}>()

const value = ref(filledValue)

</script>
<template>
<div class="object-renderer">
  <FieldContainer 
    :key="field.renderKey" 
    v-for="field in fields" 
    :field="field.field"
    
    />
</div>
</template>
<style scoped lang="less">

</style>