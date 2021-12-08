import React from 'react'
import { Layout } from 'antd';


const CantFind = () => {
    const { Content } = Layout;
    return (

    <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", minWidth:"325px", margin: "0 auto" }}>
        <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px", textAlign:"center" }}>   
            <h3 className="zoomfadein">You must search and choice movie or tv series for show his details</h3>
        </Content>
    </Layout>

    )
}

export default CantFind
