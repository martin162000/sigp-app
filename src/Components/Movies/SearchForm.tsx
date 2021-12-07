import React from 'react'
import  {apiKey}  from '../../types/types'
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const SearchForm = () => {
    
    const dispatch = useDispatch();
    const showState = useSelector((state:any) => state)

    const handleSubmit = () => {
        const query = showState.search;
        const page = 1;
        axios.get(
          `https://omdbapi.com/?apikey=${apiKey}&s=${encodeURI(query)}&page=${page}`
       ).then(response => {
        if(response.data.Response === "True") {

            const allResults = response.data.totalResults;
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

            dispatch({
                type: "ADD_ALLRESULTS",
                data: allResults
            });

            dispatch({
                type: "ADD_CURRENTPAGE",
                data: page
            });
         } 

       })
      
 }

    const handleChange = (data:any) => {
        dispatch({
            type: "ADD_SEARCH",
            data: data
        });
    }


    return (
        <Form name="basic"labelCol={{ span: 8,}} wrapperCol={{span: 16,}} initialValues={{remember: true,}} autoComplete="off" style={{marginBottom:"80px"}} onFinish={handleSubmit}>
            <Form.Item style={{ justifyContent: "center"}}> 
                <Input name="search" style={{height: "40px", borderRadius: "4px"}} placeholder="Search for any movie or tv series "
                 onChange={ (e) => handleChange(e.target.value)} value={showState.search !== false ? showState.search : ""}/>
            </Form.Item>

            <Form.Item style={{ justifyContent: "center", textAlign: "center"}}>
                <Button type="primary" htmlType="submit">
                      Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SearchForm
