import axios from "axios";

//Action name constants
export const getAccUserPending = 'account/getAccUser/pending';
export const getAccUserRejected = 'account/getAccUser/rejected';
export const getAccUserFulfilled = 'account/getAccUser/fulfilled';


//Async Call

export function getUserAccount(id){
    return async (dispatch, getState)=>{
        try {
            dispatch(getAccountUserPending());
            const {data} = await axios.get(`http://localhost:8080/accounts/${id}`);
            dispatch(getAccountUserFulfilled(data.amount));
        } catch (error) {
            dispatch(getAccountUserRejected(error.message));
        }
    }
}

getUserAccount();

export function getAccountUserPending(){
    return {type: getAccUserPending}
}

export function getAccountUserRejected(error){
    return {type: getAccUserRejected, error: error}
}

export function getAccountUserFulfilled(value){
    return {type: getAccUserFulfilled, payload: value}
}