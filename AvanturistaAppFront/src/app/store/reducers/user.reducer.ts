import {UserActions,UserActionsTypes, LoginUser, DodajKomentarUspesno, DodajAvanturuUspesno} from '../actions/user.actions';
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
        case UserActionsTypes.DODAJ_AVANTURU_USPESNO:{
            const {user} = action as DodajAvanturuUspesno;
            return user;
        }
        case UserActionsTypes.DODAJ_KOMENTAR_USPESNO:{
            const {user} = action as DodajKomentarUspesno;
            return user;
        }
        default:
            return state;
    }
}