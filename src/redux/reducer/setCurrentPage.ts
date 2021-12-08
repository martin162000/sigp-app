import {types} from '../../types/types'

const setCurrentPage = (state = false, action:any) => {
    switch (action.type) {
        case types.ADD_CURRENTPAGE:
            return action.data
    
        default:
            return state
    }

}

export default setCurrentPage