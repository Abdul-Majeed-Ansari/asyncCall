import { getAccUserFulfilled, getAccUserPending, getAccUserRejected } from "../actions";

export const account = (state={amount: 1}, action) =>{
    switch(action.type){
        case getAccUserPending:
            return {...state, pending: true}

        case getAccUserRejected:
            return {...state, error: action.error, pending: false}

        case getAccUserFulfilled:
            return {amount: action.payload, pending:false}
        
        default:
            return state;
    }
}