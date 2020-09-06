import {UserActions,UserActionsTypes, LoginUser, DodajKomentarUspesno, DodajAvanturuUspesno} from '../actions/user.actions';
import {AuthState} from '../../models/auth-state'


export function userReducer(state:AuthState=null,action:UserActions): AuthState {

    switch(action.type){
        case UserActionsTypes.LOGIN_USER:
            {
                state.loggedIn = true;
                state.user =action.payload.user;
                return state;
            }

        case UserActionsTypes.USER_LOGOUT:{
            return null;
        }
        case UserActionsTypes.DODAJ_AVANTURU_USPESNO:{
            const {user} = action as DodajAvanturuUspesno;
            let st = new AuthState(true, user);
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