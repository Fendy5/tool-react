/**
 * @Author zhoufeng
 * @CreateTime 2022/1/5 13:40
 * @Description
 */
import React, { ReactElement } from 'react'
import { Home } from '../pages/home'

export interface RouterConfig {
  path: string
  title: string
  element?: ReactElement<any, any>
  children?: RouterConfig[]
}

const routes: RouterConfig[] = [
  {
    path: '/',
    title: '首页',
    element: <Home />
  },
  {
    path: '/random-string',
    title: '随机字符串',
    element: <h1>1234</h1>
  },
  {
    path: '/about',
    title: 'about',
    children: [
      {
        path: '/about/about1',
        title: 'about1',
        element: <h1>about1</h1>
      },
      {
        path: '/about/about2',
        title: 'about2',
        element: <h2>about2</h2>
      }
    ]
  },
  {
    path: '/home',
    title: 'images',
    element: <h1>1234</h1>
  }
]

export default routes
