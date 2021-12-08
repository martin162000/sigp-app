const initialState = {}

const setFavourites = (state:any = initialState, action:any) => {
    switch (action.type) {
        case "SET_FAVOURITES":
            return action.data

        case "ADD_FAVOURITES":
            let allData = action.data;
            console.log(action.data)
            return {...state, allData}
    
        default:
            return state
    }

}

export default setFavourites