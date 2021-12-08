import {types} from '../types/types'

export function fetchSubmitRequest(data:any, page:number = 1){
    return{
        type: types.SEND_REQUEST,
        playload: data,
        page: page
    }
}

export function fetchDetailsRequest(movieId:any){
    return{
        type: types.SEND_REQUEST_DETAILS,
        playload: movieId,
    }
}

///

export const addMovie = (data:any) => {
    return {
        type:types.ADD_MOVIES,
        data:data
    }
}

export const addAllResults = (data:any) => {
    return {
        type:types.ADD_ALLRESULTS,
        data:data
    }
}

export const addCurrentPage = (data:any) => {
    return {
        type:types.ADD_CURRENTPAGE,
        data:data
    }
}

export const addDetais = (data:any) => {
    return {
        type:types.ADD_DETAILS,
        data:data
    }
}


