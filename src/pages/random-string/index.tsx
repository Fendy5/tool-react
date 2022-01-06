/**
 * @Author zhoufeng
 * @CreateTime 2022/1/5 16:30
 * @Description
 */
import React from 'react'
import { useSetTitle } from 'utils'

export const RandomString = ({ title }: { title: string }) => {
  useSetTitle(title)
  return <div>RandomString</div>
}
