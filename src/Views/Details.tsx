import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ImgAndInfo from "../Components/Details/ImgAndInfo";
import Title from "../Components/Details/Title";
import Loading from "../Components/Details/Loading";
import CantFind from "../Components/Details/CantFind";
import { fetchDetailsRequest } from "../redux/actions";

const Details = () => {
  const { Content } = Layout;

  const showState = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const test = () => {
    dispatch(fetchDetailsRequest(showState.deatilID)); 
  }

  useEffect(() => {

    dispatch(fetchDetailsRequest(showState.deatilID)); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <button onClick={test}>CLICK</button>
      </>
    );
  }
};

export default Details;
