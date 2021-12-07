import React from 'react'
import { Row, Col } from 'antd';
import {  useSelector } from 'react-redux';


const FoundMovies = () => {
    const showState = useSelector((state:any) => state)
    return (
        <Row style={{textAlign:"center", rowGap: "22px", columnGap:"22px", justifyContent:"center"}} className="roww">

                {showState.movies ? showState.movies.map((movie:any) => (
                        <Col className="movie"  xs={{ span: 24 }} lg={{ span: 11 }} md={{ span: 11 }} key={movie.imdbID}>
                            <h2>{movie.Title}</h2>
                            <div className="divImg">
                               <img src={movie.Poster} alt="movie art" />
                            </div>
                            <div className="meta">{movie.Type} - {movie.Year}</div>
                        </Col>
                )): ""}

       </Row>
    )
}

export default FoundMovies
