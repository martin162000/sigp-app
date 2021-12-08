import React, { useEffect } from "react";
import { Layout } from "antd";
import { apiKey } from "../types/types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ImgAndInfo from "../Components/Details/ImgAndInfo";
import Title from "../Components/Details/Title";
import Loading from "../Components/Details/Loading";
import CantFind from "../Components/Details/CantFind";

const Details = () => {
  const { Content } = Layout;

  const showState = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const dispFunction = (typ: string, data: any) => {
    dispatch({ type: typ, data: data });
  };
  const movieId = showState.deatilID;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://omdbapi.com/?apikey=${apiKey}&i=${encodeURI(movieId)}`);

      let movieDetail = result.data;
      dispFunction("ADD_DETAILS", movieDetail);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  if (!showState.deatilID) {
    return <CantFind />;
  } else {
    return (
      <>
        {showState.details.imdbID === showState.deatilID ? (
          <Layout className="site-layout-background" style={{ padding: "24px 0", width: "50%", minWidth: "325px", margin: "0 auto" }}>
            <Content style={{ padding: "0 24px", minHeight: 280, marginTop: "35px" }}>
              <Content className="detail zoomfadeOut">
                <Title />
                <ImgAndInfo />
              </Content>
            </Content>
          </Layout>
        ) : (
          <Loading />
        )}
      </>
    );
  }
};

export default Details;
