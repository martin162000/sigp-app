import { combineReducers } from "redux";
import getAllResults from "./getAllResults";
import getCurrentPage from "./getCurrentPage";
import getMovies from "./getMovies"
import getSearch from "./getSearch";

const reducers = combineReducers ({
    search: getSearch,
    movies: getMovies,
    allResults: getAllResults,
    currentPage: getCurrentPage
})

export default reducers;