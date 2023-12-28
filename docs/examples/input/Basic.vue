<template>
  <NmForm
    v-model="formData"
    :option="formOption"
  />
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue"
import { NmForm } from '@jyj/nm-ui'

const formData = ref({})
const formOption = reactive({
  column: [
    {
      label: 'input1',
      prop:'input1',
      type:'input'
    },
    {
      label:'input2',
      prop:'input2'
    }
  ]
})
</script>
