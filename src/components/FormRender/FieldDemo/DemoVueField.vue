<script setup lang="ts">
import type { RenderField} from './types'


const {} = defineProps<{
  value: any
  field: RenderField
}>()

const emit = defineEmits({
  change(v: any) {

  },
  validate(msgs: string[]) {
    
  }
})


</script>

<template>
<div></div>
</template>