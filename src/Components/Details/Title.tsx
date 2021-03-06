import React from "react";
import { useDispatch, useSelector } from "react-redux";

// IMPORT ANTDESIGN
import { Row, Col } from "antd";

// IMPORT TYPES
import { types } from "../../types/types";



const Title = () => {
  const dispatch = useDispatch();
  const dispFunction = (typ: string, data: any) => {
    dispatch({ type: typ, data: data });
  };
  const showState = useSelector((state: any) => state);

  const handleAddfav = () => {
    if (showState.favourites.length !== undefined && showState.favourites.find(({ imdbID }: any) => imdbID === showState.deatilID)) {
      // FOUND DUPLICATE
      return;
    }

    if (showState.favourites.length === undefined) {
      // If favourites doesnt exist
      const fadData = [
        {
          Title: showState.details.Title,
          imdbID: showState.details.imdbID,
          Poster: showState.details.Poster,
        },
      ];
      dispFunction(types.SET_FAVOURITES, fadData);
      // ADD FAVOURITES DATA TO LOCAL STOAGE
      localStorage.setItem('StorageFavourites', JSON.stringify(fadData));

      return;
    } else {
      // Add favourites to other favourites (by push)
      const allData = showState.favourites;
      const fadData = {
        Title: showState.details.Title,
        imdbID: showState.details.imdbID,
        Poster: showState.details.Poster,
      };

      allData.push(fadData);
      dispFunction(types.SET_FAVOURITES, allData);
      // ADD FAVOURITES DATA TO LOCAL STOAGE
      localStorage.setItem('StorageFavourites', JSON.stringify(allData));
      return;
    }
  };

  const changeStart = () => {
    // After click, change star
    const element: HTMLElement = document.getElementById("uncheckStar") as HTMLElement;
    element.innerHTML = '<h3 class="star activeStar">★</h3>';
  };

  const showStar = () => {
    //Found detail movie in favourites
    const isInFav = showState.favourites.length !== undefined && showState.favourites && showState.favourites.some((item: any) => item.imdbID === showState.details.imdbID);
    if (isInFav) {
      return (
        <Col span={1}>
          <h3 className="star activeStar">★</h3>
        </Col>
      );
    } else {
      return (
        <Col
          id="uncheckStar"
          span={1}
          onClick={(e) => {
            handleAddfav();
            changeStart();
          }}
        >
          <h3 className="star startUncheck ">☆</h3>
        </Col>
      );
    }
  };

  return (
    <>
      <Row>
        {showStar()}
        <Col span={23}>
          <h3>{showState.details.Title}</h3>
        </Col>
      </Row>
    </>
  );
};

export default Title;
