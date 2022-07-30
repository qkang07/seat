<script setup lang="ts">
import {ref, reactive, onMounted, onUnmounted } from 'vue'
import type {CreateField, IField, IRenderProps, RenderField, FieldRefType} from './types'
const props = defineProps<{
  renderField: RenderField
  createField: CreateField
  value: any
}>()
const emit = defineEmits<{
  (e:'change', value: any) : void
  (e: 'validate', errs: string[]) : void
}>()
const {createField, renderField, value} = props

const isNewField = ref(false)

const domRef = ref<HTMLElement>()
const fieldRef = ref<FieldRefType>()

const errMsgs = reactive([])

onMounted(() => {
  // render function
  fieldRef.value = createField({
    dom: domRef.value! ,
    value,
    field: renderField.field,
    onValidate:(msgs: string[]) => {
      emit('validate', msgs)
    },
    onValueChange:(v) => {
      emit('change', v)
    }
  })
})

onUnmounted(()=>{

})

</script>
<template>
  <div class="field-container">
    <label class="label">
      <slot name="pre-label"></slot>
      <span v-if="isNewField">[新字段]</span>
      <span v-if="field.readOnly">[只读]</span>
      <span>{{field.name}}</span>
    </label>
    <div class="desc" v-if="field.desc">{{field.desc}}</div>
    <div class="input-control">
      <div ref="controlRef"></div>
    </div>
    <div class="err-msg" v-if="errMsgs.length">
      <div v-for="(err, i) in errMsgs" :key="err + i">{{err}}</div>
    </div>
  </div>
</template>
<style scoped lang="less">
.field-container {

}
.label {
  font-size: 16px;
  font-weight: bold;
}
.desc {
  font-size: 12px;
  color: #bbb;
}
.field-error {
  color: #ff4d4f;
}

</style>