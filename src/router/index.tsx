/**
 * @Author zhoufeng
 * @CreateTime 2022/1/5 13:40
 * @Description
 */
import React, { ReactElement } from 'react'
import { Home } from '../pages/home'
import { FieldStringOutlined, LaptopOutlined, createFromIconfontCN } from '@ant-design/icons'
import { RandomString } from '../pages/random-string'
import { NotFound } from '../pages/NotFound'
import { BaseConversion } from '../pages/base-conversion'

export interface RouterConfig {
  path: string
  title?: string
  hidden?: boolean
  icon?: React.ReactNode
  element?: ReactElement<any, any>
  children?: RouterConfig[]
}

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_1968175_hxgxe8wku4l.js']
})

const routes: RouterConfig[] = [
  {
    path: '/',
    title: '首页',
    icon: <IconFont type={'icon-home'} />,
    element: <Home />
  },
  {
    path: '/random-string',
    title: '随机字符串',
    icon: <FieldStringOutlined />,
    element: <RandomString title={"产生随机字符串 | Fendy's Tools"} />
  },
  {
    path: '/base-conversion',
    title: '进制转换',
    icon: <IconFont type={'icon-Field-Binary'} />,
    element: <BaseConversion title={"进制转换 | Fendy's Tools"} />
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
  },
  {
    path: '*',
    hidden: true,
    element: <NotFound />
  }
]

export default routes
