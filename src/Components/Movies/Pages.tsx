import React from 'react'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import  {apiKey}  from '../../types/types'



const Pages = () => {
    const showState = useSelector((state:any) => state)
    const dispatch = useDispatch();





    const onChange = (page:any) => {
        dispatch({
            type: "ADD_CURRENTPAGE",
            data: page
        });

        const query = showState.search;
        axios.get(
          `https://omdbapi.com/?apikey=${apiKey}&s=${encodeURI(query)}&page=${page}`
       ).then(response => {
        if(response.data.Response === "True") {

            // All data to ombMovies
            let ombMovies = response.data.Search.filter((movie: any) => movie.Poster !== "N/A")

            // Filter duplicate data by imbdID
              const seen = new Set();
              const filteredArr = ombMovies.filter((movie: { imdbID: unknown; }) => {
                const duplicate = seen.has(movie.imdbID);
                seen.add(movie.imdbID);
                return !duplicate;
              });

              dispatch({
                type: "ADD_MOVIES",
                data: filteredArr
            });

         } 

       })




    }
    return (
        <>
            <Pagination style={{textAlign:"center", margin:"50px 0px 0px"}} defaultCurrent={1} total={showState.allResults ? showState.allResults: 0} defaultPageSize={10}
            showSizeChanger={false} current={showState.currentPage} onChange={(e) => onChange(e)} responsive hideOnSinglePage/>
        </>
    )
}

export default Pages
