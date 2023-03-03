import { MODAL_SHOWN, MODAL_UNSHOWN } from "../actionType";

// const initialState=false
const initialState={
    shown:false,
    msg:'asd'
}

const changeShown=(state=initialState,action)=>{
    switch(action.type){
        case MODAL_SHOWN:return{
            
            shown:true,
            msg:action.payload,
        };
        case MODAL_UNSHOWN:return{
            // ...state,
            shown:false,
            msg:''
        };
        default: return state
    }

}
export default changeShown