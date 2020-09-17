import {AvantureActions,AvantureActionsTypes} from '../actions/avanture.actions';
import {AvanturaState,avantureAdapter} from '../entities/avantura.adapter'

export const initialState:AvanturaState={
    ids:[],
    entities:{}
}

export function avanturaReducer(state:AvanturaState=initialState,action:AvantureActions) {

    switch(action.type){
        case AvantureActionsTypes.DODAJ_AVANTURU_USPESNO:{
            return avantureAdapter.addOne(action.avantura, state)
        }
        case AvantureActionsTypes.UCITAJ_SVE_AVANTURE_USPESNO:{
            return avantureAdapter.setAll(action.avanture,state)
        }
         case AvantureActionsTypes.UPDATE_AVANTURU_USPESNO:{
             return avantureAdapter.updateOne({
                 id:action.id,
                 changes:action.updatedAvanture
             },state)
         }
        default:
            return state;
    }
}