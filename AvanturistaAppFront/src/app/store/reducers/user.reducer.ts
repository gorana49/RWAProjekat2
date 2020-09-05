import {UserActions,UserActionsTypes, LoginUser} from '../actions/user.actions';
import {AuthState} from '../../models/auth-state'

export function userReducer(state:AuthState=null,action:UserActions) {

    switch(action.type){
        case UserActionsTypes.LOGIN_USER:
            return{
                loggedIn: true,
                user : action.payload.user
            }

        case UserActionsTypes.USER_LOGOUT:{
            return null;
        }
        default:
            return state;
    }
}