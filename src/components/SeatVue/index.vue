<script setup lang="ts">
import {Seat} from '../Seat'
import type {ISeatComponent} from '../Seat'
import {onMounted, ref, watch} from 'vue'
const props = defineProps<{
  component: ISeatComponent,
  compProps?: Record<string, any>
  onEmit?: (en: any) => any
}>()

const domRef = ref<HTMLDivElement | null>(null)
const seatRef = ref<Seat | null>(null)
onMounted(()=>{
  seatRef.value = new Seat(props.component, domRef.value!, props.compProps)
  seatRef.value.onEmit((ev)=>{
    props.onEmit?.(ev)
  })
})

watch([props.compProps], (v)=>{
  if(seatRef.value){
    seatRef.value.updateProps(props.compProps || {})
  }
}, {deep: true})
</script>
<template>
  <div ref="domRef"></div>
</template>