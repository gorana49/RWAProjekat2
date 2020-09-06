import { ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../reducers/user.reducer';
import { User } from '../../models/user';
import {KomentariState} from '../entities/komentar.adapter';
import {komentarReducer} from '../reducers/komentar.reducer'
import { UserActions } from '../actions/user.actions';
import { AuthState } from 'src/app/models/auth-state';
import {AvanturaState} from '../entities/avantura.adapter'
import {avanturaReducer} from '../reducers/avantura.reducer'

export interface State
{
    auth:AuthState;
    komentari:KomentariState;
    avanture:AvanturaState;
}

export const mainReducer: ActionReducerMap<State> = 
{
    auth:userReducer,
    komentari:komentarReducer,
    avanture:avanturaReducer
};