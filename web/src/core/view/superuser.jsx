/**
 * Superuser Frame Setting
 */

import React, { useEffect, useState } from 'react';
import { UserAuthCheck } from "../../core/auth/components/UserAuthCheck"
import { adminRoutes } from '../../routes/core_rt';
import View404 from './404';

import { Breadcrumb, Layout, Menu, theme } from 'antd'; // Layout
const { Header, Content, Footer, Sider } = Layout;

let items = [];

/**
 * Superuser Panel
 */
const SuperUser = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [selectedKey, setSelectedKey] = useState(adminRoutes[0].path);
  items = generateItems(adminRoutes);

  // Layout
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserAuthCheck('/superuser');
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  // Change Page Event
  const onClick = (e) => {
    setSelectedKey(e.key);
  };
  const selectedRoute = adminRoutes.find(route => route.path === selectedKey); // Find the endpoint match selectedKey

  return (
    //// Testing Privilege
    // <div>
    //   <h1>Superuser Page</h1>
    //   {error ? (
    //     <p style={{ color: 'red' }}>{error}</p>
    //   ) : (
    //     data ? (
    //       <div>
    //         <h2>Protected Data:</h2>
    //         <pre>{JSON.stringify(data, null, 2)}</pre>
    //       </div>
    //     ) : (
    //       <p>Loading data...</p>
    //     )
    //   )}
    // </div>

    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0, background: colorBgContainer, backgroundColor: "white" }}>
        <nav>
          <img src="" alt="Logo"></img>
          <a> Drop Down Menu1(Left)</a>
          <a> Drop Down Menu2</a>
          <a> Drop Down Menu3</a>
          <a> Drop Down Menu4</a>
          <a> Drop Down Menu5</a>
          <a> Search icon(Middle)</a>
          <a> store(Right Side)</a>
          <a> forum</a>
          <a> event</a>
          <a> job</a>
          <a> account</a>
        </nav>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={[selectedKey]} mode="inline" onClick={onClick} items={items}></Menu>
        </Sider>
        <Content style={{ margin: '0 16px', }}>
          <Breadcrumb style={{ margin: '16px 0', }}>
            <Breadcrumb.Item><h1>{selectedRoute?.title}</h1></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG, }}>
            {selectedRoute? React.createElement(selectedRoute.component) : <View404/>}
          </div>
          <Footer style={{ textAlign: 'center', }}>Wizard Camera ©{new Date().getFullYear()}</Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

/**
 * Return the sider menu detail
 * @param {string} label - Title 
 * @param {} icon - Icon
 * @param {string} key - Website endpoint
 * @param {form} children - The children of (Account, Product, Order, Report.....) Folder
 */
function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

/**
 * Get the side menu from adminRoutes
 */
const generateItems = (routes) => {
  const parentMap = {};
  const childMap = {};

  routes.forEach(route => {
    const { title, path, icon, isParent, parentID, isShow } = route;
    if (!isShow)
      return;
    const menuItem = getItem(title, path, icon);

    if (!isParent) {
      if (!childMap[parentID]) {
        childMap[parentID] = [];
      }
      childMap[parentID].push(menuItem)
    } else {
      parentMap[parentID] = menuItem;
    }
  });

  Object.keys(parentMap).forEach(parentKey => {
    const childGroup = childMap[parentKey];  // Find the childMap match Parent.parentID = Child.parentID. 
    if (childGroup) {
      parentMap[parentKey].children = childGroup; // For example: getItem('Product', 'Super_Store_Product_Management', <FileOutlined />, [getItem('Add New Product', '/Super_Store_Insert_Prodcut'), getItem('Edit Product', '/Super_Store_Edit_Product')])
    }
  });
  return Object.values(parentMap);
};

export default SuperUser;


