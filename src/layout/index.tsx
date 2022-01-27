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
import { isMobile } from '../utils'
const { SubMenu } = Menu
const { Content, Sider, Footer } = Layout

export const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(isMobile())

  const currentRoute = useLocation().pathname

  const toggleSider = () => {
    setCollapsed(!collapsed)
  }

  return (
    <App>
      <MySider collapsed={collapsed} trigger={null} collapsedWidth={0} collapsible>
        <Link to={'/'}>
          <Logo>
            <img src={longLogo} alt="" />
          </Logo>
        </Link>
        <MyMenu
          mode="inline"
          selectedKeys={[currentRoute]}
          defaultSelectedKeys={[currentRoute]}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routes.map((route) => {
            if (!route.hidden) {
              return route.children ? (
                <SubMenu key={route.path} icon={route.icon} title={route.title}>
                  {route.children.map((r) => (
                    <Menu.Item key={`${r.path}`}>
                      <Link onClick={isMobile() ? toggleSider : () => {}} to={r.path}>
                        {r.title}
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={route.path} icon={route.icon}>
                  <Link onClick={isMobile() ? toggleSider : () => {}} to={{ pathname: route.path }}>
                    {route.title}
                  </Link>
                </Menu.Item>
              )
            } else {
              return false
            }
          })}
        </MyMenu>
      </MySider>
      <Layout>
        <Header>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            onClick: toggleSider
          })}
          <Link style={{ color: 'white' }} to={'/'}>
            <span style={{ paddingLeft: '8px' }}>Fendy's Tools</span>
          </Link>
        </Header>
        <MyContent
          style={(!isMobile() && collapsed) || isMobile() ? { marginLeft: 0 } : { marginLeft: '200px' }}
          onClick={isMobile() && !collapsed ? toggleSider : () => {}}
        >
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
        <MyFooter style={(!isMobile() && collapsed) || isMobile() ? { marginLeft: 0 } : { marginLeft: '200px' }}>
          Fendy'Tools ©2022 Created by <a href="https://fendy5.cn">Fendy</a>{' '}
        </MyFooter>
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
  width: 100%;
  z-index: 10;
  position: fixed;
`
const MySider = styled(Sider)`
  position: absolute;
  z-index: 9;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
  height: calc(100% - 64px);
  top: 64px;
`
const MyContent = styled(Content)`
  position: relative;
  padding: 24px;
  min-height: 280px;
  top: 64px;
  margin-left: 200px;
  transition: 0.5s;
`
const MyFooter = styled(Footer)`
  z-index: 99;
  background: unset;
  text-align: center;
  transition: 0.5s;
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
