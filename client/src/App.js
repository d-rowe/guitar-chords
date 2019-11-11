import React from 'react';
import ChordSearch from './views/chordSearch';
import { keys, suffixes } from './utils/allChords';
import { Layout, Menu, Icon } from 'antd';
import './App.sass';
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const instruments = ['Guitar', 'Ukulele'];
let key = 1;
const getKey = () => {
  key += 1;
  return key;
};

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key={getKey()}>
          <Icon type='search' />
          <span className='nav-text'>Chord Search</span>
        </Menu.Item>
        {instruments.map((instrument, i) => (
          <SubMenu
            key={getKey()}
            title={<span className='nav-text'>{instrument} Chords</span>}
          >
            {keys.map(k => (
              <SubMenu
                key={getKey()}
                title={<span className='nav-text'>{k}</span>}
              >
                {suffixes.map(s => (
                  <Menu.Item key={getKey()}>{s}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <ChordSearch />
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2019 daniel rowe</Footer>
    </Layout>
  </Layout>
);

export default App;
