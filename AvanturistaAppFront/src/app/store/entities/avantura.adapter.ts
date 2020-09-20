import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {Adventure} from '../../models/adventure'
export const adventureAdapter = createEntityAdapter<Adventure>({
   sortComparer:sortById
});

export interface AdventureState {
    ids:number[],
    entities:{[key:number]:Adventure}
};

function sortById(e1: Adventure, e2: Adventure) {
    return e2.id - e1.id
}

export const getAdventureState= createFeatureSelector<AdventureState>('adventures');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adventureAdapter.getSelectors(getAdventureState);

export const selectAllAdventure=selectAll;
export const selectTotalAdventures=selectTotal;