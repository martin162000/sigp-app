
import {types} from '../../types/types'

const setAllResults = (state = false, action:any) => {
    switch (action.type) {
        case types.ADD_ALLRESULTS:
            return action.data
    
        default:
            return state
    }

}

export default setAllResults