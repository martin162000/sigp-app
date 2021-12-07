import React from 'react'
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';



const Title = () => {
    const showState = useSelector((state:any) => state)
    return (
        <>
            <Row>
                <Col span={1}><h3>☆</h3></Col>
                <Col span={23}><h3>{showState.details.Title}</h3></Col>
            </Row>
        </>
    )
}

export default Title
