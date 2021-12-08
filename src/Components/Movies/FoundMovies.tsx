import React from 'react'
import { Row, Col } from 'antd';
import {  useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


const FoundMovies = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const dispFunction = (typ:string,data:any) => {
        dispatch({type: typ, data: data});
    }
    const showState = useSelector((state:any) => state)

    const handleClickOnMovie = (movieId:any) => {
        dispFunction("ADD_MOVIEID",movieId);
        document.getElementById("menuDetails")?.click();
        history.push("/details") 
    }

    return (
        <Row style={{textAlign:"center", rowGap: "22px", columnGap:"22px"}} className="roww">

                {showState.movies ? showState.movies.map((movie:any) => (
                        <Col className="movie zoomfadein"  xs={{ span: 24 }} lg={{ span: 11 }} md={{ span: 11 }} key={movie.imdbID} onClick={e => handleClickOnMovie(movie.imdbID)}>
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
