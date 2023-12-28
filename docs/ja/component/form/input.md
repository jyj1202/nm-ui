<script setup>
import Basic from '/examples/input/Basic.vue'
import DefaultValue from '/examples/input/DefaultValue.vue'
import Disable from '/examples/input/Disable.vue'
import Clearable from '/examples/input/Clearable.vue'
import Password from '/examples/input/Password.vue'
import Textarea from '/examples/input/Textarea.vue'
import Size from '/examples/input/Size.vue'
</script>

# 入力フィールド

## 基本的な使用法

:::demo typeがinputの場合は省略可能で、デフォルトはinputです。

input/Basic

:::

## デフォルト値

:::demo v-modelを使用して直接実装できます。

input/DefaultValue

:::

## 無効な状態

:::demo `disabled`属性で無効にするかどうかを指定できます。

input/Disable

:::

## クリア可能

:::demo `clearable`属性を使用すると、クリア可能な入力フィールドを簡単に取得できます。デフォルトは`true`です。

input/Clearable

:::

## パスワードフィールド

:::demo `showPassword`属性を使用すると、表示と非表示を切り替えられるパスワードフィールドが得られます。

input/Password

:::

## テキストエリア

:::demo `maxRows`および`minRows`を設定して、最小行数と最大行数を指定することで、テキストエリアの高さを自動的に調整できます。

input/Textarea

:::

## サイズ

:::demo `size`属性を使用して、入力フィールドのサイズを指定できます。デフォルトは`small`で、`large`、`small`、`mini`の3つのサイズが用意されています。

input/Size

:::