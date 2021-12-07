const getCurrentPage = (state = false, action:any) => {
    switch (action.type) {
        case "ADD_CURRENTPAGE":
            return action.data
    
        default:
            return state
    }

}

export default getCurrentPage