import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {Avantura} from '../../models/avantura'
export const avantureAdapter = createEntityAdapter<Avantura>({
   sortComparer:sortById
});

export interface AvanturaState {
    ids:number[],
    entities:{[key:number]:Avantura}
};

function sortById(e1: Avantura, e2: Avantura) {
    return e2.id - e1.id
}

export const getCommentState= createFeatureSelector<AvanturaState>('avanture');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = avantureAdapter.getSelectors(getCommentState);

export const selectAllAvanture=selectAll;
export const selectTotalAvanture=selectTotal;