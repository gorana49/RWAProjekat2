import {UserActions,UserActionsTypes, DodajKomentarUspesno, UpdateMyAdventureSuccess, LoadUserSuccess, LoadUser, UpdateMyAdventure} from '../actions/user.actions';
import {AuthState} from '../../models/auth-state'
import { User } from 'src/app/models/user';

export let initialState:AuthState = {
    loggedIn:false,
    user: undefined 
}
export function userReducer(state:AuthState=initialState,action:UserActions): any {
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
        case UserActionsTypes.UPDATE_MY_ADVENTURE_SUCCESS:{
            const {user} = action as UpdateMyAdventureSuccess;
            let st = new AuthState(true, user);
            return st;
        }
        case UserActionsTypes.DODAJ_KOMENTAR_USPESNO:{
           
            let user = action as DodajKomentarUspesno;
            console.log(user);
            let st = new AuthState(true, user.user);
            return st;
        }
        default:
            return state;
    }
}