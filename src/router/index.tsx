/**
 * @Author zhoufeng
 * @CreateTime 2022/1/5 13:40
 * @Description
 */
import React, { ReactElement } from 'react'
import { Home } from '../pages/home'
import { FieldStringOutlined, LaptopOutlined } from '@ant-design/icons'
import { RandomString } from '../pages/random-string'

export interface RouterConfig {
  path: string
  title: string
  icon?: React.ReactNode
  element?: ReactElement<any, any>
  children?: RouterConfig[]
}

const routes: RouterConfig[] = [
  {
    path: '/',
    title: '首页',
    icon: <LaptopOutlined />,
    element: <Home />
  },
  {
    path: '/random-string',
    title: '随机字符串',
    icon: <FieldStringOutlined />,
    element: <RandomString />
  },
  {
    path: '/about',
    title: 'about',
    icon: <LaptopOutlined />,
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
    icon: <LaptopOutlined />,
    title: 'images',
    element: <h1>1234</h1>
  }
]

export default routes
