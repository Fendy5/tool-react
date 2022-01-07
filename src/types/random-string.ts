/**
 * @Author zhoufeng
 * @CreateTime 2022/1/7 09:13
 * @Description
 */
export enum StringType {
  number = '1234567890',
  lowerCase = 'abcdefghijklmnopqrstuvwxyz',
  capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  special = '~!@#$%^&*()_+-=[]{}|<>?/'
}

export interface Option {
  label: string
  value: string
  disabled?: boolean
}

export interface FormProps {
  len: string
  checkedList: (keyof typeof StringType)[]
}
