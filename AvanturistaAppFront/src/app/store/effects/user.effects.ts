import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {map,mergeMap} from 'rxjs/operators';
import {LoginTextService} from '../../services/loginText.service'
import {UserActionsTypes, DodajKomentar, DodajMojuAvanturu, LoadUser} from '../actions/user.actions'


@Injectable()
export class UserEffects{    
    getUserById=createEffect(()=>    this.actions$.pipe(
    ofType<LoadUser>(UserActionsTypes.LOAD_USER),
    map((action)=>action.id),
        mergeMap((id)=>this.userService.GetUserById(id)
            .pipe(
                map((user)=>({
                type:UserActionsTypes.LOAD_USER_SUCCESS,
                user:user
            }))
            ))
        )
    )
    
    addToMyAdventures=createEffect(()=>
    this.actions$.pipe(
        ofType<DodajMojuAvanturu>(UserActionsTypes.DODAJ_MOJU_AVANTURU),
        map((action)=>action.user),
        mergeMap((user)=>this.userService.updateUser(user)
        .pipe(
            map((user)=>({
                type:UserActionsTypes.DODAJ_MOJU_AVANTURU_USPESNO,
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