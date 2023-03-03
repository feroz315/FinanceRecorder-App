import { MODAL_SHOWN,MODAL_UNSHOWN } from "../actionType"
export const showModalsubmit=(payload)=>{
    return{
        type:MODAL_SHOWN,
        payload

    }
}
export const unshowModal=()=>{
    return{
        type:MODAL_UNSHOWN

    }
}