import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {AdventureService} from '../../services/avantura.service';
import {map,mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AdventureActionsTypes,AddAdventure, UpdateAdventure} from '../actions/adventures.actions'

@Injectable()
export class AvantureEffects{

    constructor(private actions$:Actions,private adventureService:AdventureService){}
    
    getAdventures=createEffect(()=>
        this.actions$.pipe(
            ofType(AdventureActionsTypes.LOAD_ALL_ADVENTURES),
            mergeMap(()=>this.adventureService.getAllAdventures()
            .pipe(
                map(avanture=>({
                    type:AdventureActionsTypes.LOAD_ALL_ADVENTURES_SUCCESS,
                    adventures:avanture
                }
                ))
                )
            )
        )
    )

    addAdventure=createEffect(()=>
    this.actions$.pipe(
        ofType<AddAdventure>(AdventureActionsTypes.ADD_ADVENTURE),
        map((action)=>action.adventure),
        mergeMap((newAdventure)=>this.adventureService.addAdventure(newAdventure)
        .pipe(
            map(avantura=>({
                type:AdventureActionsTypes.ADD_ADVENTURE_SUCCESS,
                adventure:avantura
            }))
            )
        )
        )
    )

    updateAdventure=createEffect(()=>
    this.actions$.pipe(
        ofType<UpdateAdventure>(AdventureActionsTypes.UPDATE_ADVENTURE),
        map((action)=>action.updatedAdventure),
        mergeMap((updatedAvantura)=>this.adventureService.updateAdventure(updatedAvantura)
        .pipe(
            map((avantura)=>({
                type:AdventureActionsTypes.UPDATE_ADVENTURE_SUCCESS,
                id:avantura.id,
                updatedAvantura:avantura
            }))
            )
        )
        )
    )

}