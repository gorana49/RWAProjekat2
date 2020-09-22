import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {Adventure} from '../../models/adventure'
export const adventureAdapter = createEntityAdapter<Adventure>({
});

export interface AdventureState {
    ids:number[],
    entities:{[key:number]:Adventure}
};

export const getAdventureState= createFeatureSelector<AdventureState>('adventures');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adventureAdapter.getSelectors(getAdventureState);

export const selectAllAdventure=selectAll;
export const selectTotalAdventures=selectTotal;