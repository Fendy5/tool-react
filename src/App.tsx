import React from 'react'
import styled from '@emotion/styled'
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import 'styles/index.scss'
import { Layout, Menu } from 'antd'
import routes from './router'
const { SubMenu } = Menu
const { Content, Sider } = Layout

function App() {
  return (
    <MyLayout>
      <Header>Fendy's Tools</Header>
      <Router>
        <Layout>
          <Sider width={200}>
            <MyMenu mode="inline" defaultSelectedKeys={['/']} style={{ height: '100%', borderRight: 0 }}>
              {routes.map((route) => {
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
                    <Link to={route.path}>{route.title}</Link>
                  </Menu.Item>
                )
              })}
            </MyMenu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
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
            </Content>
          </Layout>
        </Layout>
      </Router>
    </MyLayout>
  )
}
export default App

const Header = styled.div`
  height: 64px;
  padding-left: 24px;
  font-size: 21px;
  color: white;
  line-height: 64px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
  background-color: #673ab6;
`
const MyLayout = styled(Layout)`
  min-height: 100vh;
`
const MyMenu = styled(Menu)`
  //box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%) !important;
`
