import { types, apiKey } from "../../types/types"
import axios from "axios"
import {addAllResults, addCurrentPage, addDetais, addMovie} from "../actions"
import { call, takeEvery, put, all } from "typed-redux-saga";


function* ayscFetchRequest(action:any){
    try{
        let filtArray;
        let allRes;
        let currPage;
        const query = action.playload;
        const page = action.page;
        const url = `https://omdbapi.com/?apikey=${apiKey}&s=${encodeURI(query)}&page=${page}`;

        yield call(()=>axios.get(url).then((response) => {
            if (response.data.Response === "True") {
              const allResults = response.data.totalResults;
              // All data to ombMovies
              let ombMovies = response.data.Search.filter((movie: any) => movie.Poster !== "N/A");
      
              // Filter duplicate data by imbdID
              const seen = new Set();
              const filteredArr = ombMovies.filter((movie: { imdbID: unknown }) => {
                const duplicate = seen.has(movie.imdbID);
                seen.add(movie.imdbID);
                return !duplicate;
              });

              filtArray = filteredArr;
              allRes = allResults;
              currPage = page;
            }
          }))
          
          yield put(addMovie(filtArray))
          yield put(addAllResults(allRes))
          yield put(addCurrentPage(currPage))
    } catch(error) {
        //console.log(error);
    }
}



function* ayscDetails(action:any){
    try{
        let detailData;
        const movieId = action.playload
        const url = `https://omdbapi.com/?apikey=${apiKey}&i=${encodeURI(movieId)}`;

        yield call(()=>axios.get(url).then((response) => {
            if (response.data.Response === "True") {
                detailData = response.data
            }
          }))
          
          yield put(addDetais(detailData))
    } catch(error) {
        //console.log(error);
    }
}

export default function* RootSaga()
{
    yield all([
        takeEvery(types.SEND_REQUEST, ayscFetchRequest),
        takeEvery(types.SEND_REQUEST_DETAILS, ayscDetails)
      ]);
}