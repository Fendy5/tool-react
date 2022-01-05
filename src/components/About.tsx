/**
 * @Author zhoufeng
 * @CreateTime 2022/1/4 16:15
 * @Description
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigator = useNavigate()
  const goToHome = () => {
    navigator('/home', { replace: true })
  }
  return <div onClick={goToHome}>About</div>
}
