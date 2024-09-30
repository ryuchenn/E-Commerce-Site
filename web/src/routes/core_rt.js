/**
 * Main Router: Account Related Routes
 */

import View404 from "../core/view/404"
import Register from "../core/view/register"
import Login from "../core/view/login"
import Logout from "../core/view/logout"
import Account from "../core/view/account"
import SuperUser from "../core/view/superuser"
import Store_AddProduct from "../store/view/store_AddProduct"
import Superuser_Home from "../core/view/superuser_Home"
import {DesktopOutlined, FileOutlined, PieChartOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';

/**
 * Visitor, Member Routes
 */
export const mainRoutes = [
    {
        path: "/",
        component: View404
    },{
        path: "/login",
        component: Login
    },{
        path: "/register",
        component: Register
    },{
        path: "/logout",
        component: Logout
    },{
        path: "/account",
        component: Account
    },{
        path: "/error404",
        component: View404
    },
]

/**
 * Superuser Routes
 * @param {string} path - Endpoint 
 * @param {string} title - Sider Title
 * @param {form} component - Import component
 * @param {} icon - Icon
 * @param {int} isParent - True: Belongs with parent. It will become folder.
 *                       - False: Belong with children. It will generate under the parent folder.
 * @param {int} parentID - It only works when isParent=True. It will be classified under the directory of parentID.
 * @param {boolean} isShow - According to privilege. When user have the form privilege, isShow=True. It's True as default.
 * @param {int} position - Parent folder or child path order position.
 */
export const adminRoutes = [
    { 
        path: "/superuserhome",
        title: 'Admin Home',
        component: Superuser_Home,
        icon: <HomeOutlined/>,
        isParent: true,
        parentID: 0,
        isShow: true, 
        position: 0
    },

    // Superuser Frame
    { 
        path: "/superuser",
        component: SuperUser,
        isShow: false
    },
    
    // Parent Menu: (Admin) Account Setting
    { 
        path: "/Super_Account",
        title: 'Account',
        component: View404,
        icon: <UserOutlined/>,
        isParent: true,
        parentID: 1,
        isShow: true, 
        position: 0
    },{ // Child Menu: Account Privilege
        path: "/Super_Account_Privilege",
        title: 'Privilege Setting',
        component: View404,
        isParent: false,
        parentID: 1,
        isShow: true, 
        position: 0
    },
    
    // Parent Menu: (Store) Product Management
    { 
        path: "/Super_Store_Product_Management",
        title: 'Product',
        icon: <FileOutlined/>,
        component: View404,
        isParent: true,
        parentID: 2,
        isShow: true, 
        position: 1
    },{ // Child Menu: Insert Prodcut
        path: "/Super_Store_Insert_Prodcut",
        title: 'Add New Product',
        component: Store_AddProduct,
        isParent: false,
        parentID: 2,
        isShow: true, 
        position: 0
    },{ // Child Menu: Edit/Check/Delete Product
        path: "/Super_Store_Edit_Product",
        title: 'Edit Product',
        component: View404,
        isParent: false,
        parentID: 2,
        isShow: true, 
        position: 1
    },
    
    // Parent Menu: (Store) Order Management
    { 
        path: "/Super_Store_Order_Management",
        title: 'Order',
        icon: <DesktopOutlined/>,
        component: View404,
        isParent: true,
        parentID: 3,
        isShow: true, 
        position: 0
    },{ // Child Menu: Check Order(Order, shipments, cancellations, returns)
        path: "/Super_Store_Order",
        title: 'Order Status',
        component: View404,
        isParent: false,
        parentID: 3,
        isShow: true, 
        position: 0
    },
    
    // Parent Menu: (Store) Output Report
    { 
        path: "/Super_Store_Report",
        title: 'Report',
        icon: <PieChartOutlined/>,
        component: View404,
        isParent: true,
        parentID: 4,
        isShow: true, 
        position: 0
    },{ // Child Menu: Monthly Report
        path: "/Super_Store_Monthly_Report",
        title: 'Monthly Report',
        component: View404,
        isParent: false,
        parentID: 4,
        isShow: true, 
        position: 0
    },
    
]    
    