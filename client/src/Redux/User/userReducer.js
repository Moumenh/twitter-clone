import {UserActionTypes} from './userTypes'

const initialState = {
    access : localStorage.getItem('access'),
    refresh : localStorage.getItem('refresh'),
    isAuthenticated:null,
    user:null
};
 const userReducer  = function(state = initialState,action){
    const{ type,payload} = action
    switch(type) {
        case UserActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('access',payload.access)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh,

            }
        case UserActionTypes.USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case UserActionTypes.USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }
        case UserActionTypes.LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated : false,
                user: null,
            }
        default:
            return state
    }
}
export default userReducer 