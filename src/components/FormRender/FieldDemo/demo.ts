import {createApp} from 'vue'
import type { IRenderProps } from '../types';

import DemoVueField from "./DemoVueField.vue";

function vueFieldRender(dom: HTMLDivElement, props: IRenderProps) {
  createApp({
    
  }, {}).mount(dom)
}