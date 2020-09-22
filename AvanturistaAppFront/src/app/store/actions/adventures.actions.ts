import { Action } from '@ngrx/store';
import {Adventure} from '../../models/adventure'

export enum AdventureActionsTypes{

    LOAD_ALL_ADVENTURES ='[Load All Adventures]',
    LOAD_ALL_ADVENTURES_SUCCESS='[Load All Adventures Success]',

    UPDATE_ADVENTURE = '[Update Adventure]',
    UPDATE_ADVENTURE_SUCCESS ='[Update Adventure Success]',

    ADD_ADVENTURE = '[Add Adventure]',
    ADD_ADVENTURE_SUCCESS = '[Add Adventure Success]'
}

export class LoadAllAdventures implements Action{
    readonly type=AdventureActionsTypes.LOAD_ALL_ADVENTURES;
    constructor(){}
}

export class LoadAllAdventuresSuccess implements Action{
    readonly type=AdventureActionsTypes.LOAD_ALL_ADVENTURES_SUCCESS;
    constructor(public  adventures:Adventure[]){}
}


export class UpdateAdventure implements Action{
    readonly type=AdventureActionsTypes.UPDATE_ADVENTURE;
    constructor(public updatedAdventure:Adventure){}
}

export class UpdateAdventureSuccess implements Action{
    readonly type=AdventureActionsTypes.UPDATE_ADVENTURE_SUCCESS;
    constructor(
        public id:number,
        public updatedAdventure:Partial<Adventure>
        ){}
}


export class AddAdventure implements Action{
    readonly type=AdventureActionsTypes.ADD_ADVENTURE;
    constructor(public adventure:Adventure){}
}

export class AddAdventureSuccess implements Action{
    readonly type=AdventureActionsTypes.ADD_ADVENTURE_SUCCESS;
    constructor(public adventure:Adventure){}
}
export type AdventureActions 
= LoadAllAdventures
| LoadAllAdventuresSuccess
| UpdateAdventure
| UpdateAdventureSuccess
| AddAdventure
| AddAdventureSuccess;
