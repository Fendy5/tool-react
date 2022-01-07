/**
 * @Author zhoufeng
 * @CreateTime 2022/1/6 09:49
 * @Description
 */
import React, { useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import longLogo from 'assets/images/logo-fendy5.png'
import { Layout, Menu } from 'antd'
import routes from '../router'
import styled from '@emotion/styled'
const { SubMenu } = Menu
const { Content, Sider, Footer } = Layout

export const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  const currentRoute = useLocation().pathname

  const toggleSider = () => {
    setCollapsed(!collapsed)
  }
  return (
    <App>
      <Sider collapsed={collapsed} trigger={null} collapsedWidth={0} collapsible>
        <Logo>
          <img src={longLogo} alt="" />
        </Logo>
        <MyMenu mode="inline" defaultSelectedKeys={[currentRoute]} style={{ height: '100%', borderRight: 0 }}>
          {routes.map((route) => {
            if (!route.hidden) {
              return route.children ? (
                <SubMenu key={route.path} icon={route.icon} title={route.title}>
                  {route.children.map((r) => (
                    <Menu.Item key={`${r.path}`}>
                      <Link to={r.path}>{r.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={route.path} icon={route.icon}>
                  <Link to={{ pathname: route.path }}>{route.title}</Link>
                </Menu.Item>
              )
            } else {
              return false
            }
          })}
        </MyMenu>
      </Sider>
      <Layout>
        <Header>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            onClick: toggleSider
          })}
          <span style={{ paddingLeft: '8px' }}>Fendy's Tools</span>
        </Header>
        <MyContent>
          <Routes>
            {routes.map((route) =>
              route.children ? (
                route.children.map((r) => <Route path={r.path} key={r.path} element={r.element} />)
              ) : (
                <Route path={route.path} key={route.path} element={route.element} />
              )
            )}
            <Route path={'/'} element={<Navigate to={'/home'} />} />
          </Routes>
        </MyContent>
        <Footer style={{ textAlign: 'center' }}>
          Fendy'Tools ©2022 Created by <a href="https://fendy5.cn">Fendy</a>{' '}
        </Footer>
      </Layout>
    </App>
  )
}

const App = styled(Layout)`
  min-height: 100vh;
`
const Header = styled.div`
  height: 64px;
  padding-left: 24px;
  font-size: 21px;
  color: white;
  line-height: 64px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
  background-color: #673ab6;
`
const MyContent = styled(Content)`
  position: relative;
  padding: 24px;
  margin: 0;
  min-height: 280px;
`
const MyMenu = styled(Menu)`
  //box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%) !important;
`
const Logo = styled.div`
  float: left;
  width: 100%;
  height: 32px;
  margin: 16px 0;
  line-height: 25px;
  text-align: center;
`
