import type { JFormOptionType } from "../typings";

export const defaultConfig: Partial<Omit<JFormOptionType, 'column'>> = {
  size: 'default',
  labelWidth: 130,
  labelPosition: 'right',
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
