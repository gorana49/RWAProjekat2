import { ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../reducers/user.reducer';
import { AuthState } from '../../models/auth-state';
import {KomentariState} from '../entities/komentar.adapter';
import {komentarReducer} from '../reducers/komentar.reducer'
export interface State
{
    auth:AuthState;
    //avanture:AvanturaState;
    komentari:KomentariState;
}

export const mainReducer: ActionReducerMap<State> = {
    auth:userReducer,
    komentari:komentarReducer
    //avanture:AvanturaReducer;
};