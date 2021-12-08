import React from "react";
import { Layout } from "antd";

const NoFavourite = () => {
  const { Content } = Layout;
  return (
    <Layout className="site-layout-background" style={{ width: "50%", minWidth: "325px", margin: "0 auto" }}>
      <Content style={{ padding: "0 24px", minHeight: 280, textAlign: "center" }}>
        <h3 className="zoomfadein">You haven't saved anything yet. Search for a movie or a tv series and add it to you favourites.</h3>
      </Content>
    </Layout>
  );
};

export default NoFavourite;
