import React from 'react'
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';


const Favourites = () => {
    const { Content } = Layout;
    return (
    <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", minWidth:"325px", margin: "0 auto" }}>
        <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px" }}>   
        <Content className="favourites">
            <Row>
            <Col span={24}><h3>Spider-Man</h3></Col>
            </Row>
            <Row className="favWrap">
            <div className="imgHolder"><img src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" alt="movie art"/></div>
            <Col xs={{ span: 24 }} lg={{ span: 12 }} className="favContent" >
                <div className="btnGroup">
                    <Button className="btns btnDetail" type="primary">Details</Button>
                    <Button className="btns" type="primary" danger>Delete</Button>
                </div>

            </Col>
            </Row>

    </Content>
        </Content>

    </Layout>

    )
}

export default Favourites
