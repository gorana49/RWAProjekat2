import {CommentsActions, CommentsActionsTypes} from '../actions/komentar.actions';
import {KomentariState,commentsAdapter} from '../entities/komentar.adapter'

export const initialState:KomentariState={
    ids:[],
    entities:{}
}

export function komentarReducer(state:KomentariState=initialState,action:CommentsActions) {

    switch(action.type){
        case CommentsActionsTypes.ADD_COMMENT_SUCCESS:{
            return commentsAdapter.addOne(action.mycomment, state)
        }
        case CommentsActionsTypes.LOAD_All_COMMENTS_SUCCESS:{
            return commentsAdapter.addAll(action.comments, state)
        }
        default:
            return state;
    }
}