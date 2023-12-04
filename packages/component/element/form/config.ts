import type { JFormOptionType } from "../typings";

export const defaultConfig: Record<keyof Omit<JFormOptionType, 'column'>, any> = {
  size: 'default',
  labelWidth: 130,
  // labelPosition: 'left',
  labelSuffix: '：',
  // gutter: 30,
  span: 12,
  type: 'input',
  menuBtn: true,
  submitBtn: true,
  emptyBtn: true,
  submitText: '提交',
  emptyText: '重置',
}
