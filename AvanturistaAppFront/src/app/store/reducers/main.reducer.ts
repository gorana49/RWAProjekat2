import { ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../reducers/user.reducer';
import { AuthState } from '../../models/auth-state';

export interface State
{
    auth:AuthState;
    
}

export const mainReducer: ActionReducerMap<State> = {
    auth:userReducer
};