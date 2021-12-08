import React from 'react'

//IMPORT ANTDESIGN
import { Layout } from 'antd';

//IMPORT COMPONENTS
import FoundFavourites from '../Components/Favourites/FoundFavourites';




const Favourites = () => {
    const { Content } = Layout;

    return (
    <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", minWidth:"325px", margin: "0 auto" }}>
        <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px" }}>   

            <FoundFavourites/>

        </Content>
    </Layout>

    )
}

export default Favourites
