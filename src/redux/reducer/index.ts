import { combineReducers } from "redux";
import setAllResults from "./setAllResults";
import setCurrentPage from "./setCurrentPage";
import setMovies from "./setMovies"
import setSearch from "./setSearch";
import setIdDeatialMovie from "./setIdDeatialMovie";
import setDetails from "./setDetails";


const reducers = combineReducers ({
    search: setSearch,
    movies: setMovies,
    allResults: setAllResults,
    currentPage: setCurrentPage,
    deatilID: setIdDeatialMovie,
    details: setDetails

})

export default reducers;