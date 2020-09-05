import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';

export enum AvantureActionsTypes{
    UCITAJ_SVE_AVANTURE='[Ucitaj sve avanture]',
    UCITAJ_SVE_AVANTURE_USPESNO='[Load All Publications Success]'
}

export class UcitajSveAvanture implements Action{
    readonly type=AvantureActionsTypes.UCITAJ_SVE_AVANTURE;
    constructor(){}
}

export class UcitajSveAvantureUspesno implements Action{
    readonly type=AvantureActionsTypes.UCITAJ_SVE_AVANTURE_USPESNO;
    constructor(public avanture:Avantura[]){}
}



export type AvantureActions 
=UcitajSveAvanture
| UcitajSveAvantureUspesno;
