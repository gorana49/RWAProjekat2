import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import { komentar } from '../../../app/models/komentar'


export const commentsAdapter = createEntityAdapter<komentar>({
   sortComparer:sortByDate
});

export interface KomentariState {
    ids:number[],
    entities:{[key:number]:komentar}
};

function sortByDate(e1: komentar, e2: komentar) {
    return Number(e2.datumObjave) - Number(e1.datumObjave)
}

export const getCommentState= createFeatureSelector<KomentariState>('komentari');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = commentsAdapter.getSelectors(getCommentState);

export const selectAllComments=selectAll;
export const selectTotalComments=selectTotal;