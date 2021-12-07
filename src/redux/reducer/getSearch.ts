const getSearch = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_SEARCH":
            return action.data
    
        default:
            return state
    }

}

export default getSearch