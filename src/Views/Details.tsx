import React from 'react'
import { Layout } from 'antd';
import { Row, Col } from 'antd';



const Details = () => {
    const { Content } = Layout;

    return (
    <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", minWidth:"325px", margin: "0 auto" }}>
        <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px" }}>   
        <Content className="detail">
            <Row>
            <Col span={1}><h3>☆</h3></Col>
            <Col span={23}><h3>Spider-Man</h3></Col>
            </Row>

            <Row className="imgAndInfo">
            <div className="imgHolder"><img src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" alt="movie art"/></div>
            <Col xs={{ span: 24 }} lg={{ span: 14 }} className="info" >
                <p><span className="infoStrong">Rating:</span> 7.3</p>
                <p><span className="infoStrong">Genre:</span> Action, Adventure, Sci-Fi</p>
                <p><span className="infoStrong">Runtime:</span> 121 min</p>
                <p><span className="infoStrong">Country:</span> United States</p>
                <p><span className="infoStrong">Director:</span> Sam Raimi</p>
                <p><span className="infoStrong">Writer:</span> Stan Lee, Steve Ditko, David Koepp</p>
                <p><span className="infoStrong">Actor:</span> Tobey Maguire, Kirsten Dunst, Willem Dafoe</p>
                <p><span className="infoStrong">Released:</span> 03 May 2002</p>
            </Col>
            </Row>

            <Row>
            <Col span={24}>
            <p><span className="infoStrong">Plot:</span> When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains 
            spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.</p></Col>
            </Row>
    </Content>
        </Content>

    </Layout>
    )
}

export default Details
