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
      label:'input1',
      prop:'input1'
    },
    {
      label:'input2',
      prop:'input2'
    }
  ]
})
</script>
