import React from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';


const Headerbar = () => {
    const { Header } = Layout;


    return (
    <Header className="header" >
      <Menu theme="dark" mode="horizontal" style={{justifyContent: 'center'}} defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><NavLink to="/movies">Movies</NavLink></Menu.Item>
        <Menu.Item key="2"><NavLink to="/details">Details</NavLink></Menu.Item>
        <Menu.Item key="3"><NavLink to="/favourites">Favourites</NavLink></Menu.Item>
      </Menu>
    </Header>
    )
}

export default Headerbar
