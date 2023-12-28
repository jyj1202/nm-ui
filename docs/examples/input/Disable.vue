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
      label:'input1',
      prop:'input1',
      type:'input',
      disabled: true
    },
    {
      label:'input2',
      prop:'input2'
    }
  ]
})
</script>

<style scoped>

</style>
