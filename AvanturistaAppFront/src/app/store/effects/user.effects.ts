import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {map,mergeMap} from 'rxjs/operators';
import {LoginTextService} from '../../services/loginText.service'
import {UserActionsTypes,LoginUser, DodajKomentar, DodajAvanturu} from '../actions/user.actions'


@Injectable()
export class UserEffects{

    @Effect({dispatch:false})
    login$ = this.actions$.pipe(
        ofType<LoginUser>(UserActionsTypes.LOGIN_USER),
        tap(action=> localStorage.setItem("user",JSON.stringify(action.payload.user))    
        )
    );
    
    addToMyPublications=createEffect(()=>
    this.actions$.pipe(
        ofType<DodajAvanturu>(UserActionsTypes.DODAJ_AVANTURU),
        map((action)=>action.user),
        mergeMap((user)=>this.userService.updateUser(user)
        .pipe(
            map((user)=>({
                type:UserActionsTypes.DODAJ_AVANTURU_USPESNO,
                user:user
            }))
            )
        )
        )
    )
    addToMyComments=createEffect(()=>
    this.actions$.pipe(
        ofType<DodajKomentar>(UserActionsTypes.DODAJ_KOMENTAR),
        map((action)=>action.user),
        mergeMap((user)=>this.userService.updateUser(user)
        .pipe(
            map((user)=>({
                type:UserActionsTypes.DODAJ_KOMENTAR_USPESNO,
                user:user
            }))
            )
        )
        )
    )
    constructor(private actions$:Actions,private userService:LoginTextService){ }
}