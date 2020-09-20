export interface Comment{
    id:number;
    adventureId:number;
    publish:string;
    username:string;
    content:string;
}
export class Comment implements Comment
{
    id:number;
    adventureId:number;
    publish:string;
    username:string;
    content:string;
    constructor(values: Comment = null) {
        if(values != null)
        {
            Object.assign(this, values);
        }
    }
}