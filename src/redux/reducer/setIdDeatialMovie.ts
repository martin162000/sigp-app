const setIdDeatialMovie = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_MOVIEID":
            return action.data
    
        default:
            return state
    }

}

export default setIdDeatialMovie