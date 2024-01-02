# Form 属性文档

## 概览
| 参数             | 说明                                | 类型       | 可选值 | 默认值 |
|------------------|-------------------------------------|------------|--------|--------|
| modelValue/v-model | 绑定值                             | object     | -      | -      |
| option           | 表单配置项参考Option配置              | object     | -      | -      |
| upload-before    | upload组件上传前的回调,done用于继续图片上传，loading用于中断操作 | function   | -      | (file,done,loading)=>{} |
| upload-after     | upload组件上传后的回调,done用于结束操作，loading用于中断操作 | function   | -      | (res,done)=>{} |
| upload-delete    | upload组件删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除 | function   | -      | (file,column)=>{} |
| upload-preview   | upload组件查看回调                  | function   | -      | (file,column,done)=>{} |
| upload-error     | upload组件上传失败错误回调            | function   | -      | (error,column)=>{} |
| upload-exceed    | upload组件上传超过长度限制回调        | function   | -      | (limit,files,fileList,column)=>{} |

## Option

| 参数            | 说明                    | 类型     | 可选值                   | 默认值   |
|-----------------|-------------------------|----------|--------------------------|----------|
| size            | 组件的尺寸                | number   | medium/small/mini        | small    |
| column          | 表单列配置参考Column相关配置 | array    | -                        | -        |
| labelWidth      | 标题宽度                | string   | -                        | 80       |
| labelPosition   | 标题位置                | string   | left/right/top           | left     |
| labelSuffix     | 标题的后缀               | string   | -                        | :        |
| enter           | 回车按键触发提交表单      | boolean  | -                        | false    |
| group           | 分组表单                | array    | -                        | -        |
| tabs            | 选项卡表单(前提要配置group) | boolean | -                        | false    |
| menuBtn         | 表单操作栏是否显示        | boolean  | -                        | true     |
| menuSpan        | 表单操作菜单栅格占据的列数   | number   | -                        | 24       |
| menuPosition    | 表单操作菜单的位置         | string   | left/center/right        | center   |
| submitBtn       | 提交按钮                | boolean  | -                        | true     |
| submitText      | 提交按钮文案            | string   | -                        | 提交     |
| emptyBtn        | 清空按钮                | boolean  | -                        | true     |
| emptyText       | 清空按钮文案            | string   | -                        | 清空     |

## Column-共用属性

| 参数               | 说明                              | 类型      | 可选值                               | 默认值   |
|-------------------|-----------------------------------|-----------|--------------------------------------|----------|
| label             | 标签文本的内容                    | string    | —                                    | —        |
| prop              | 标签文本的内容属性名称             | string    | —                                    | -        |
| control           | 字段控制器                         | function  | —                                    | -        |
| bind              | 深结构数据绑定值                   | string    | —                                    | -        |
| rules             | 验证规则                           | object    | —                                    | -        |
| value             | 初始化默认值                       | -         | -                                    | -        |
| disabled          | 禁用                               | boolean   | —                                    | false    |
| order             | 位置排序，数字越大位置越靠前      | number    | —                                    | -        |
| size              | 组件的尺寸                         | number    | medium/small/mini                    | small    |
| span              | 栅格占据的列数                     | number    | -                                    | 12       |
| gutter            | 栅格间隔                           | number    | -                                    | 0        |
| offset            | 栅格左侧的间隔格数                 | number    | -                                    | 0        |
| push              | 栅格向右移动格数                   | number    | -                                    | 0        |
| pull              | 栅格向左移动格数                   | number    | -                                    | 0        |
| row               | 栅格后面的内容是否从新的一行开始展示 | boolean | -                                    | false    |
| display           | 栅格显示                           | boolean   | -                                    | true     |
| labelWidth        | 标题宽度                           | string    | -                                    | 80       |
| labelPosition     | 标题位置                           | string    | left/right/top                       | left     |
| tip               | 内容提示辅助语                     | string    | -                                    | -        |
| tipPlacement      | 内容提示辅助语位置                 | string    | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top |
| labelTip          | 标题提示辅助语                     | string    | -                                    | -        |
| labelTipPlacement | 标题提示辅助语位置                 | string    | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | top     |

以下是你提供的内容转换成Markdown格式：

## Column-字典属性

| 参数           | 说明                                 | 类型      | 可选值              | 默认值                        |
|---------------|--------------------------------------|-----------|---------------------|-------------------------------|
| props         | 数据字典属性的配置对象，具体参考Props参考配置 | object    | —                   | —                             |
| dicData       | 数据字典值                            | array     | —                   | —                             |
| dicUrl        | 数据字典接口url地址                    | string    | —                   | —                             |
| dicQuery      | 数据字典接口url携带请求参数            | object    | —                   | —                             |
| dicHeaders    | 数据字典接口url携带头部参数            | object    | —                   | —                             |
| dicFormatter  | 数据字典接口url返回数据格式化方法       | function  | —                   | (res)=>{return res}           |
| dicMethod     | 数据字典接口请求方式                   | string    | —                   | —                             |

## Column-Props

| 参数       | 说明                            | 类型      | 可选值      | 默认值  |
|-----------|---------------------------------|-----------|-------------|---------|
| label     | 选项标签为选项对象的某个属性值   | string    | —           | label   |
| value     | 选项的值为选项对象的某个属性值   | string    | —           | value   |
| children  | 选项的子选项为选项对象的某个属性值 | string    | —           | children |
| disabled  | 选项的禁用为选项对象的某个属性值   | string    | —           | disabled |
| res       | 选项返回结构的层级(例如data.data) | string    | —           | -       |

## Column-Input

| 参数          | 说明                              | 类型      | 可选值    | 默认值                     |
|--------------|-----------------------------------|-----------|-----------|----------------------------|
| placeholder  | 输入框占位文本                     | string    | -         | 请输入/请选择+label名称     |
| clearable    | 是否可清空                         | boolean   | -         | true                       |
| readonly     | 是否只读                           | boolean   | -         | -                          |
| blur         | 在失去焦点时触发                    | function  | -         | ({column,value})=>{}       |
| focus        | 在获得焦点时触发                    | function  | -         | ({column,value})=>{}       |
| change       | 值改变的时触发                      | function  | -         | ({column,value})=>{}       |
| click        | 点击时触发                          | boolean   | -         | ({column,value})=>{}       |
| maxlength    | 原生属性，最大输入长度              | number    | -         | -                          |
| minlength    | 原生属性，最小输入长度              | number    | -         | -                          |
| prefixIcon   | 输入框头部图标                     | string    | -         | -                          |
| suffixIcon   | 输入框尾部图标                     | number    | -         | -                          |
| showPassword | 是否显示切换密码图标                | boolean   | -         | true                       |
| rows         | 输入框行数，只对 type="textarea" 有效 | number    | -         | 2                          |
| minRows      | 输入框行最小行数，只对 type="textarea" 有效 | number | -         | 2                          |
| maxRows      | 输入框行最大行数，只对 type="textarea" 有效 | number | -         | 6                          |
