import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {tap} from 'rxjs/operators';

import {UserActionsTypes,LoginUser} from '../actions/user.actions'


@Injectable()
export class UserEffects{

    @Effect({dispatch:false})
    login$ = this.actions$.pipe(
        ofType<LoginUser>(UserActionsTypes.LOGIN_USER),
        tap(action=> localStorage.setItem("user",JSON.stringify(action.payload.user)))
    );

    constructor(private actions$:Actions){ }
}