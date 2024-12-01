import { ADD_DATA, DEL_DATA } from "../actionType";

// const initialState=false
const initialState={
    data:[]
}

export default AddTimeManually=(state=initialState,action)=>{

    // console.log('from reducer',action)
    switch(action.type){
        case ADD_DATA:return{
            ...state,
            // console.log(first)
            data:action.payload
            
        };
        case DEL_DATA:return{
            ...state,
            data:state.data.splice(action.payload,1)
        };
        default: return state;
    }

}
// export default AddTimeManually