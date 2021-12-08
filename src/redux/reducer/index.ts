import { combineReducers } from "redux";

//IMPORT ALL REDUCERS
import setAllResults from "./setAllResults";
import setCurrentPage from "./setCurrentPage";
import setMovies from "./setMovies"
import setSearch from "./setSearch";
import setIdDeatialMovie from "./setIdDeatialMovie";
import setDetails from "./setDetails";
import setFavourites from "./setFavourites";


const reducers = combineReducers ({
    search: setSearch,
    movies: setMovies,
    allResults: setAllResults,
    currentPage: setCurrentPage,
    deatilID: setIdDeatialMovie,
    details: setDetails,
    favourites: setFavourites

})

export default reducers;