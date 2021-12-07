const setAllResults = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_ALLRESULTS":
            return action.data
    
        default:
            return state
    }

}

export default setAllResults