/**
 * @Author zhoufeng
 * @CreateTime 2022/1/4 21:17
 * @Description
 */
import React from 'react'
import { useSetTitle } from 'utils'
import { Col, Row } from 'antd'
import { Card, MyIcon } from 'components/lib'
import { NavLink } from 'react-router-dom'
import 'styles/_home.scss'

export const Home = () => {
  useSetTitle('首页')

  const apps = [
    {
      id: 1,
      name: '生成随机字符串',
      icon: <MyIcon fontSize={'3rem'} type={'icon-Field-String'} />,
      desc: '可随机生成大小写字母、特殊字符、数字类型组合的字符串',
      url: '/random-string'
    },
    {
      id: 2,
      name: '进制转换',
      icon: <MyIcon fontSize={'3rem'} type={'icon-Field-Binary'} />,
      desc: '可在二进制、八进制、十进制、十六进制之间相互转换',
      url: '/base-conversion'
    },
    {
      id: 3,
      name: '图片格式化转换',
      desc: '可将图片格式转换成png、ico、jpg、webp、bmp',
      icon: <MyIcon fontSize={'3rem'} type={'icon-image'} />,
      url: '/image-conversion'
    }
  ]
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {apps.map((i) => (
          <Col key={i.id} xs={24} sm={12} md={12} lg={8} xl={6}>
            <Card className={'home'}>
              {i.icon}
              <div className={'pl-8'}>
                <NavLink className={'pb-8'} replace to={i.url}>
                  {i.name}
                </NavLink>
                <p>{i.desc}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
