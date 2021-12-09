import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT ANTDESIGN
import { Layout, Menu } from "antd";



const Headerbar = () => {
  const { Header } = Layout;
  const pathName = window.location.pathname === "/sigp-app" ? "/movies" : window.location.pathname ;

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" style={{ justifyContent: "center" }} defaultSelectedKeys={[pathName]}>
        <Menu.Item id="menuMovies" key="/movies">
          <NavLink to="/movies">Movies</NavLink>
        </Menu.Item>
        <Menu.Item id="menuDetails" key="/details">
          <NavLink to="/details">Details</NavLink>
        </Menu.Item>
        <Menu.Item id="menuFavourites" key="/favourites">
          <NavLink to="/favourites">Favourites</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Headerbar;
