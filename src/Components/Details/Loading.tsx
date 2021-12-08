import React from 'react'
import { Layout } from 'antd';


const Loading = () => {
    const { Content } = Layout;
    return (

    <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", minWidth:"325px", margin: "0 auto" }}>
        <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px", textAlign:"center" }}>   
            <h2 className="fadeInFaster">LOADING...</h2>
        </Content>

    </Layout>

    )
}

export default Loading
