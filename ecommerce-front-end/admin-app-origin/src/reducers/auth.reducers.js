import { authconstants } from "../actions/constants";


const initState= {
    name: 'Tharu'
};

export default (state= initState, action)=>{

    console.log(action);

    switch(action.type){
        case authconstants.LOGIN_REQUEST:
            state={
                ...state,
                ...action.payload
            }
            break;
    }

    return state;
}

