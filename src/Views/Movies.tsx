import React from 'react';
import { Layout, Pagination } from 'antd';
import SearchForm from '../Components/Movies/SearchForm';
import FoundMovies from '../Components/Movies/FoundMovies';




const Movies = () => {
    
        const { Content } = Layout;
        return (
           
          <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", margin: "0 auto" }}>
              <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px" }}>   

              <SearchForm/>
              <FoundMovies/>
              </Content>

              <Pagination style={{textAlign:"center", margin:"50px 0px 0px"}} defaultCurrent={6} total={500} defaultPageSize={6}
                showSizeChanger={false} responsive />
          </Layout>


        );
}
export default Movies
