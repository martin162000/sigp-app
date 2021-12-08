import React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NoFavourite from "./NoFavourite";

const FoundFavourites = () => {
  const { Content } = Layout;
  const history = useHistory();
  const dispatch = useDispatch();
  const dispFunction = (typ: string, data: any) => {
    dispatch({ type: typ, data: data });
  };
  const showState = useSelector((state: any) => state);

  const handleClickDetails = (movieId: any) => {
    dispFunction("ADD_MOVIEID", movieId);
    document.getElementById("menuDetails")?.click();
    history.push("/details");
  };

  const handleClickDelete = (movieId: any) => {
    const favoritiesMovies: [] = showState.favourites;
    const result = favoritiesMovies.filter((movie: any) => movie.imdbID !== movieId);
    dispFunction("SET_FAVOURITES", result);
  };

  if (showState.favourites.length === 0 || showState.favourites.length === undefined) {
    return <NoFavourite />;
  } else {
    return (
      <>
        {showState.favourites.map((movie: any) => (
          <Content className="favourites leftFadeIn" key={movie.imdbID}>
            <Row>
              <Col span={24}>
                <h3>{movie.Title}</h3>
              </Col>
            </Row>
            <Row className="favWrap">
              <div className="imgHolder">
                <img src={movie.Poster} alt="movie art" />
              </div>
              <Col xs={{ span: 24 }} lg={{ span: 12 }} className="favContent">
                <div className="btnGroup">
                  <Button className="btns btnDetail" type="primary" onClick={(e) => handleClickDetails(movie.imdbID)}>
                    Details
                  </Button>
                  <Button className="btns" type="primary" danger onClick={(e) => handleClickDelete(movie.imdbID)}>
                    Delete
                  </Button>
                </div>
              </Col>
            </Row>
          </Content>
        ))}
      </>
    );
  }
};

export default FoundFavourites;
