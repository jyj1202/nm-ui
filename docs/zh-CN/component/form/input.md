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

:::demo 当type为input时可以不写,默认为input。

input/Basic

:::

## 默认值

:::demo 直接通过v-model轻松实现。

input/DefaultValue

:::

## 禁用状态

:::demo 通过`disabled`属性指定是否禁用。

input/Disable

:::

## 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框,默认为`true`。

input/Clearable

:::

## 密码框

:::demo 使用`showPassword`属性即可得到一个可切换显示隐藏的密码框。

input/Password

:::

## 文本域

:::demo 通过设置`maxRows`和`minRows`，指定最小行数和最大行数,使得文本域的高度能够根据文本内容自动进行调整。

input/Textarea

:::

## 尺寸

:::demo 可通过`size`属性指定输入框的尺寸，默认为`small`，还提供了`large`,`small`和`mini`三种尺寸。

input/Size

:::
