import {types} from '../../types/types'
const setSearch = (state = false, action:any) => {
    switch (action.type) {
        case types.ADD_SEARCH:
            return action.data
    
        default:
            return state
    }

}

export default setSearch