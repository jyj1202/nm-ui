<script setup>
import Basic from '/examples/input/Basic.vue'
import DefaultValue from '/examples/input/DefaultValue.vue'
import Disable from '/examples/input/Disable.vue'
import Clearable from '/examples/input/Clearable.vue'
import Password from '/examples/input/Password.vue'
import Textarea from '/examples/input/Textarea.vue'
import Size from '/examples/input/Size.vue'
</script>

# input 输入框

## 基础用法
<Basic/>
```vue
<template>
  <NmForm
    v-model="formData"
    :option="formOption"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { NmForm } from '@jyj/nm-ui'

const formData = ref({})
const formOption = reactive({
  column: [
    {
      label:'输入框',
      prop:'input',
      type:'input'
    },
    {
      label:'输入框',
      prop:'input1'
    }
  ]
})
</script>
```

## 默认值
<DefaultValue/>
```ts
<template>
  <NmForm
    v-model="formData"
    :option="formOption"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { NmForm } from '@jyj/nm-ui'

const formData = ref({
  input1: '强者自救',
  input2: '圣者渡人'
})
const formOption = reactive({
  column: [
    {
      label:'输入框',
      prop:'input1',
      type:'input'
    },
    {
      label:'输入框',
      prop:'input2'
    }
  ]
})
</script>
```

## 禁用状态
<Disable/>

## 可清空
<Clearable/>

## 密码框
<Password/>

## 文本域
<Textarea/>

## 尺寸
<Size/>
