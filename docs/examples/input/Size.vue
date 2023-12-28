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
      label:'large size',
      prop:'input',
      type:'input',
      size: 'large'
    },
    {
      label:'default size',
      prop:'input1'
    },
    {
      label:'small size',
      prop:'input2',
      size: 'small'
    },
  ]
})
</script>

<style scoped>

</style>
