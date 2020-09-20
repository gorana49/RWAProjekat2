import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import { Comment } from '../../../app/models/komentar'


export const commentsAdapter = createEntityAdapter<Comment>({
   sortComparer:sortByDate
});

export interface CommentState extends EntityState<Comment> {
};

function sortByDate(e1: Comment, e2: Comment) {
    return Number(e2.publish) - Number(e1.publish)
}

export const getCommentState= createFeatureSelector<CommentState>('comments');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = commentsAdapter.getSelectors(getCommentState);

export const selectAllComments=selectAll;
export const selectTotalComments=selectTotal;
export const selectIdsComments=selectIds;
export const selectEntitiesComments = selectEntities;