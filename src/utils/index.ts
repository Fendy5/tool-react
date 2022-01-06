/**
 * @Author zhoufeng
 * @CreateTime 2022/1/6 08:50
 * @Description
 */
import React, { useEffect } from 'react'

export const useSetTitle = (title: string, keepOnUnmount: boolean = true) => {
  const oldTitle = React.useRef(document.title).current
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle
      }
    }
  }, [oldTitle, keepOnUnmount])
}
