import { markRaw, type Component } from "vue";
import {
  ElInput, ElInputNumber, ElRadio, ElRadioGroup, ElSelect, ElOption,
  ElCheckbox, ElCheckboxGroup, ElColorPicker, ElDatePicker, ElRate, ElSlider, ElSwitch 
} from "element-plus";
import type { JFormColumn } from "../typings";

const elFormComponents: Record<string, Component> = {
  ElInput, ElInputNumber, ElRadio, ElRadioGroup, ElSelect, ElOption,
  ElCheckbox, ElCheckboxGroup, ElColorPicker, ElDatePicker, ElRate, ElSlider, ElSwitch 
}

/**@description get component to be render */
export const getComponentType = (type: string, col:JFormColumn={label: '', prop: ''}): string|Component => {
  /** if col has custom component, use component */
  if (col.component) {
    return col.component
  }
  /* if col doesn't have custom component, use col's type to get form component */
  const JCompTypeMap: Record<string, string> = {
    'upload': 'JUpload'
  }
  if (JCompTypeMap[type]) {
    return JCompTypeMap[type]
  }
  const elCompTypeMap: Record<string, string> = {
    'date': 'date-picker', // FIXME:bug
    'password': 'input',
    'textarea': 'input'
  }
  const compType = elCompTypeMap[type] ?? type
  return getComponentByName(toCamelCase(`el-${compType}`))
}

/**
 * @description 获取组件插槽内子组件
 * @param type 
 */
export function getSlotComponent (type: string): Component {
  /* 插槽子组件映射 */
  const slotCompMap: Record<string, string> = {
    'select': 'option',
    'radio-group': 'radio',
    'checkbox-group': 'checkbox'
  }
  return getComponentByName(toCamelCase(`el-${slotCompMap[type]}`))
}

function getComponentByName(compName: string) {
  const comp = elFormComponents[compName]
  return markRaw(comp)
}

function toCamelCase(str: string): string {
  const words = str.split('-');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join('');
}

