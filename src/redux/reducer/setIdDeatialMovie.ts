import {types} from '../../types/types'
const setIdDeatialMovie = (state = false, action:any) => {
    switch (action.type) {
        case types.ADD_MOVIEID:
            return action.data
    
        default:
            return state
    }

}

export default setIdDeatialMovie