import {AdventureActions,AdventureActionsTypes} from '../actions/adventures.actions';
import {AdventureState,adventureAdapter} from '../entities/avantura.adapter'

export const initialState:AdventureState={
    ids:[],
    entities:{}
}

export function avanturaReducer(state:AdventureState=initialState,action:AdventureActions) {

    switch(action.type){
        case AdventureActionsTypes.ADD_ADVENTURE_SUCCESS:{
            return adventureAdapter.addOne(action.adventure, state)
        }
        case AdventureActionsTypes.LOAD_ALL_ADVENTURES_SUCCESS:{
            return adventureAdapter.setAll(action.adventure,state)
        }
         case AdventureActionsTypes.UPDATE_ADVENTURE_SUCCESS:{
             return adventureAdapter.updateOne({
                 id:action.id,
                 changes:action.updatedAdventure
             },state)
         }
        default:
            return state;
    }
}