# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shikiji](https://github.com/antfu/shikiji), with additional features like line-highlighting:

{{ 1 + 1 }}

<span>dadxx</span>

<script setup>
import { reactive, ref } from "vue"
import { NmTest, NmForm } from '@jyj/nm-ui'

const formData = ref({
  input: 'default value'
})
const formOption = reactive({
  labelPosition: 'left',
  column: [{
    label: 'input',
    prop: 'input',
    type: 'input',
    span: 12,
    placeholder: 'try to input something',
    rules: {
      required: true,
      message: "Please input something",
      trigger: "blur"
    }
  }, {
    label: 'input-number',
    prop: 'input-number',
    type: 'input-number',
    span: 12,
    rules: {
      required: true,
      message: "Please input something",
      trigger: "blur"
    }
  }]
})
</script>

<NmTest/>
<NmForm
  v-model="formData"
  :option="formOption"
>
</NmForm>

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
