import {UserActions,UserActionsTypes, DodajKomentarUspesno, DodajMojuAvanturuUspesno, LoadUserSuccess, LoadUser} from '../actions/user.actions';
import {AuthState} from '../../models/auth-state'
import { User } from 'src/app/models/user';

export let initialState:AuthState = {
    loggedIn:false,
    user: undefined 
}
export function userReducer(state:AuthState=initialState,action:UserActions): AuthState {
    switch(action.type){
        case UserActionsTypes.LOAD_USER_SUCCESS:{
            return{
                loggedIn:true,
                user: action.user
            }
        }         
        case UserActionsTypes.USER_LOGOUT:{
            return null;
        }
        case UserActionsTypes.DODAJ_MOJU_AVANTURU_USPESNO:{
            const user = action as DodajMojuAvanturuUspesno;
            let st = new AuthState(true, user.user);
            return st;
        }
        case UserActionsTypes.DODAJ_KOMENTAR_USPESNO:{
            const {user} = action as DodajKomentarUspesno;
            let st = new AuthState(true, user);
            return st;
        }
        default:
            return state;
    }
}