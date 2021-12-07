import React from 'react';
import { Layout} from 'antd';
import SearchForm from '../Components/Movies/SearchForm';
import FoundMovies from '../Components/Movies/FoundMovies';
import Pages from '../Components/Movies/Pages';




const Movies = () => {
    
        const { Content } = Layout;
        return (
           
          <Layout className="site-layout-background" style={{ padding: '24px 0', width: "50%", margin: "0 auto" }}>
              <Content style={{ padding: '0 24px', minHeight: 280, marginTop: "35px" }}>   

              <SearchForm/>
              <FoundMovies/>
              </Content>

              <Pages/>
          </Layout>


        );
}
export default Movies
