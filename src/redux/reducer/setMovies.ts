const setMovies = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_MOVIES":
            return action.data
    
        default:
            return state
    }

}

export default setMovies