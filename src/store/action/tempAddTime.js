import { ADD_DATA,DEL_DATA} from "../actionType"
export const addData=(payload)=>{
    // console.log('payload====>',payload)
    return{
        type:ADD_DATA,
        payload

    }
}
export const delData=(payload)=>{
    return{
        type:DEL_DATA,
        payload
    }
}