import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {AvanturaService} from '../../services/avantura.service';
import {map,mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AvantureActionsTypes,DodajAvanturu, UpdateAvanturu} from '../actions/avanture.actions'

@Injectable()
export class AvantureEffects{

    constructor(private actions$:Actions,private avantureService:AvanturaService){}
    getAvanture=createEffect(()=>
        this.actions$.pipe(
            ofType(AvantureActionsTypes.UCITAJ_SVE_AVANTURE),
            mergeMap(()=>this.avantureService.getAllAvanture()
            .pipe(
                map(avanture=>({
                    type:AvantureActionsTypes.UCITAJ_SVE_AVANTURE_USPESNO,
                    avanture:avanture
                }))
                )
            )
        )
    )
    dodajAvanturu=createEffect(()=>
    this.actions$.pipe(
        ofType<DodajAvanturu>(AvantureActionsTypes.DODAJ_AVANTURU),
        map((action)=>action.avantura),
        mergeMap((novaAvantura)=>this.avantureService.dodajAvanturu(novaAvantura)
        .pipe(
            map((avantura)=>({
                type:AvantureActionsTypes.DODAJ_AVANTURU_USPESNO,
                avantura:avantura
            }))
            )
        )
        )
    )

    updatePublication=createEffect(()=>
    this.actions$.pipe(
        ofType<UpdateAvanturu>(AvantureActionsTypes.UPDATE_AVANTURU),
        map((action)=>action.updatedAvantura),
        mergeMap((updatedAvantura)=>this.avantureService.updateAvanturu(updatedAvantura)
        .pipe(
            map((publication)=>({
                type:AvantureActionsTypes.UPDATE_AVANTURU_USPESNO,
                id:publication.id,
                updatedAvantura:publication
            }))
            )
        )
        )
    )

}