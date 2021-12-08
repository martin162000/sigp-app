import React from 'react'
import { useSelector } from 'react-redux';

// IMPORT ANTDESIGN
import { Row, Col } from 'antd';


const ImgAndInfo = () => {
    const showState = useSelector((state:any) => state)
    return (
        <>
            <Row className="imgAndInfo">
            <div className="imgHolder"><img src={showState.details.Poster} alt="movie art"/></div>
            <Col xs={{ span: 24 }} lg={{ span: 14 }} className="info" >
                <p><span className="infoStrong">Rating:</span> {showState.details.imdbRating}</p>
                <p><span className="infoStrong">Genre:</span> {showState.details.Genre}</p>
                <p><span className="infoStrong">Runtime:</span> {showState.details.Runtime}</p>
                <p><span className="infoStrong">Country:</span> {showState.details.Country}</p>
                <p><span className="infoStrong">Director:</span> {showState.details.Director}</p>
                <p><span className="infoStrong">Writer:</span> {showState.details.Writer}</p>
                <p><span className="infoStrong">Actor:</span> {showState.details.Actors}</p>
                <p><span className="infoStrong">Released:</span> {showState.details.Released}</p>
            </Col>
            </Row>

            <Row>
            <Col span={24}>
            <p><span className="infoStrong">Plot:</span> {showState.details.Plot}</p></Col>
            </Row>
            
        </>
    )
}

export default ImgAndInfo
