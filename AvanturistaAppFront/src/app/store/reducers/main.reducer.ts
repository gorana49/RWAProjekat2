import { ActionReducerMap} from '@ngrx/store';
import {userReducer} from '../reducers/user.reducer';
import { User } from '../../models/user';
import {CommentState} from '../entities/komentar.adapter';
import {komentarReducer} from '../reducers/komentar.reducer'
import { UserActions } from '../actions/user.actions';
import { AuthState } from 'src/app/models/auth-state';
import {AdventureState} from '../entities/avantura.adapter'
import {avanturaReducer} from '../reducers/avantura.reducer'
import { Comment } from 'src/app/models/komentar';

export interface State
{
    auth:AuthState;
    comments:CommentState;
    adventures:AdventureState;
}

export const mainReducer: ActionReducerMap<State> = 
{
    auth:userReducer,
    comments :komentarReducer,
    adventures:avanturaReducer
};