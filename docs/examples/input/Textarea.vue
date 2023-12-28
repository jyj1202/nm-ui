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
  input: 'default value'
})
const formOption = reactive({
  column: [
    {
      label:'输入框',
      prop:'input',
      type:'textarea',
    },
    {
      label:'输入框',
      prop:'input1'
    }
  ]
})
</script>

<style scoped>

</style>
