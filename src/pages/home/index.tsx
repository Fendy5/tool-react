/**
 * @Author zhoufeng
 * @CreateTime 2022/1/4 21:17
 * @Description
 */
import React from 'react'
import { useSetTitle } from 'utils'
import { Col, Row } from 'antd'
import { FieldStringOutlined, PictureOutlined } from '@ant-design/icons'
import { Card, IconFont } from 'components/lib'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  useSetTitle('首页')

  const apps = [
    {
      id: 1,
      name: '生成随机字符串',
      icon: <FieldStringOutlined twoToneColor={'#673ab6'} />,
      url: '/random-string'
    },
    {
      id: 2,
      name: '进制转换',
      icon: <IconFont color={'#673ab6'} type={'icon-Field-Binary'} />,
      url: '/random-string'
    },
    {
      id: 3,
      name: '图片格式化转换',
      icon: <PictureOutlined twoToneColor={'#673ab6'} />,
      url: '/random-string'
    }
  ]
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {apps.map((i) => (
          <Col key={i.id} xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card className={'fx-between align-center'}>
              {i.icon}
              <NavLink replace to={i.url}>
                <span>{i.name}</span>
              </NavLink>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
