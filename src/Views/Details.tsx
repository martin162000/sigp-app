import React, { useEffect } from 'react'
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import  {apiKey}  from '../types/types'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';



const Details = () => {
    const { Content } = Layout;

    const showState = useSelector((state:any) => state)
    const dispatch = useDispatch();
    const dispFunction = (typ:string,data:any) => {
        dispatch({type: typ, data: data});
    }

    const movieId = showState.deatilID;

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://omdbapi.com/?apikey=${apiKey}&i=${encodeURI(movieId)}`
          );

            let movieDetail = result.data
            dispFunction("ADD_DETAILS", movieDetail);
        };
        fetchData();

      }, [movieId]);

    return (
    <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", minWidth:"325px", margin: "0 auto" }}>
        <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px" }}>   
        <Content className="detail">
            <Row>
            <Col span={1}><h3>☆</h3></Col>
            <Col span={23}><h3>{showState.details.Title}</h3></Col>
            </Row>

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
    </Content>
        </Content>

    </Layout>
    )
}

export default Details
