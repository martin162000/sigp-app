import {types} from '../../types/types'

const setDetails = (state = false, action:any) => {
    switch (action.type) {
        case types.ADD_DETAILS:
            return action.data
    
        default:
            return state
    }

}

export default setDetails