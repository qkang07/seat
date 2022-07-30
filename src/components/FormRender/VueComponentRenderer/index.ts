import { createApp, type Component } from "vue";
import { defineCreateField, type CreateField, type CreateFieldProps, type IField } from "../types";

const createVueField = defineCreateField((props: CreateFieldProps , comp: Component) => {
  const app = createApp(comp)
  app.mount(props.dom)
  const handleValueUpdate = ( v: any ) => {
    
  }

  const handleFieldUpdate =(f: IField) =>{

  }

  return {
    handleFieldUpdate,
    handleValueUpdate
  }
})