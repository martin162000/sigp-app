const setDetails = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_DETAILS":
            return action.data
    
        default:
            return state
    }

}

export default setDetails