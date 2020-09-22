import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {switchMap, tap} from 'rxjs/operators';
import {map,mergeMap} from 'rxjs/operators';
import {UserService} from '../../services/user.service'
import {UserActionsTypes, DodajKomentar, UpdateMyAdventure, LoadUser, UpdateMyAdventureSuccess} from '../actions/user.actions'


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
        ofType<UpdateMyAdventure>(UserActionsTypes.UPDATE_MY_ADVENTURE),
        map((action)=>action.user),
        mergeMap(user=> this.userService.updateUser(user).pipe(
            map(user => {
                return { 
                    type:UserActionsTypes.UPDATE_MY_ADVENTURE_SUCCESS,
                    user:user
                };
            })))))

    addToMyComments=createEffect(()=> 
    this.actions$.pipe(
        ofType<DodajKomentar>(UserActionsTypes.DODAJ_KOMENTAR),
        map((action)=> action.user ),
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
    constructor(private actions$:Actions,private userService:UserService){ }
}