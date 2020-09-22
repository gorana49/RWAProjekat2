  
export interface Adventure{
    id:number,
    title:string,
    location:string,
    level:number,
    duration:string,
    isAvailable:boolean,
    description:string,
  //  imageUrl?:string,
  //  linkUrl?:string
}
export class Adventure implements Adventure{
    id:number;
    title:string;
    location:string;  
    level:number;
    duration:string;
    isAvailable:boolean;
    description:string;

    constructor()
    {
      this.id=0;
      this.title='';
      this.location='';
      this.duration='';
      this.isAvailable= true;
      this.description='';
    }
}

