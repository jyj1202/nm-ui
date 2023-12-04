/** common type for form and table */
export interface CommonOption {
  size?: '' | 'large' | 'default' | 'small';
}

export type DicData = Array<{
  label: string;
  value: any
}>
