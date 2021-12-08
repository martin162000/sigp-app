import {types} from '../../types/types'
const setMovies = (state = false, action:any) => {
    switch (action.type) {
        case types.ADD_MOVIES:
            return action.data
    
        default:
            return state
    }

}

export default setMovies