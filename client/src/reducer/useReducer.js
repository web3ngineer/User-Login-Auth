export const initialState = {userSession:false, username:"", fullName:""} ;

export const reducer = (state, action) => {
    
    if(action.type == "USER"){
        return {
            ...state,
            userSession: action.payload.userSession,
            username: action.payload.username,
            fullName: action.payload.fullName,
        }
    }

    return state;
}