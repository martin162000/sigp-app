import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// IMPORT ACTIONS
import { fetchDetailsRequest } from "../redux/actions";

// IMPORT ANTDESIGN
import { Layout } from "antd";

// IMPORT COMPONENTS
import ImgAndInfo from "../Components/Details/ImgAndInfo";
import Title from "../Components/Details/Title";
import Loading from "../Components/Details/Loading";
import CantFind from "../Components/Details/CantFind";




const Details = () => {
  const { Content } = Layout;

  const showState = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsRequest(showState.deatilID)); 
    
  }, [dispatch, showState.deatilID]);

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
