import {types} from '../../types/types'
const initialState = {}
const setFavourites = (state:any = initialState, action:any) => {
    switch (action.type) {
        case types.SET_FAVOURITES:
            return action.data
    
        default:
            return state
    }

}

export default setFavourites