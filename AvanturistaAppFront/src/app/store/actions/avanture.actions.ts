import { Action } from '@ngrx/store';
import {Avantura} from '../../models/avantura'
import { Observable } from 'rxjs';

export enum AvantureActionsTypes{
    UCITAJ_SVE_AVANTURE='[Ucitaj sve avanture]',
    UCITAJ_SVE_AVANTURE_USPESNO='[Ucitaj Sve Avanture Uspesno]',
    UPDATE_AVANTURU = '[Update Avanturu]',
    UPDATE_AVANTURU_USPESNO ='[Update Avanturu Uspesno]',
    DODAJ_AVANTURU = '[Dodaj Avanturu]',
    DODAJ_AVANTURU_USPESNO = '[Dodaj Avanturu Uspesno]'
}

export class UcitajSveAvanture implements Action{
    readonly type=AvantureActionsTypes.UCITAJ_SVE_AVANTURE;
    constructor(){}
}

export class UcitajSveAvantureUspesno implements Action{
    readonly type=AvantureActionsTypes.UCITAJ_SVE_AVANTURE_USPESNO;
    constructor(public avanture:Avantura[]){}
}

export class UpdateAvanturu implements Action{
    readonly type=AvantureActionsTypes.UPDATE_AVANTURU;
    constructor(public updatedAvantura:Avantura){}
}

export class UpdateAvanturuUspesno implements Action{
    readonly type=AvantureActionsTypes.UPDATE_AVANTURU_USPESNO;
    constructor(
        public id:number,
        public updatedAvanture:Partial<Avantura>
        ){}
}

export class DodajAvanturu implements Action{
    readonly type=AvantureActionsTypes.DODAJ_AVANTURU;
    constructor(public avantura:Avantura){}
}

export class DodajAvanturuUspesno implements Action{
    readonly type=AvantureActionsTypes.DODAJ_AVANTURU_USPESNO;
    constructor(public avantura:Avantura){}
}
export type AvantureActions 
=UcitajSveAvanture
| UcitajSveAvantureUspesno
| DodajAvanturuUspesno
| DodajAvanturu
| UpdateAvanturuUspesno
| UpdateAvanturu;
