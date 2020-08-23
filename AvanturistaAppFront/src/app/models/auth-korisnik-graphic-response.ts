export interface IAuthKorisnikGraphicResponse{
    Password:string;
    Boja:number;
}

export class AuthKorisnikGraphicResponse implements IAuthKorisnikGraphicResponse{
    Password: string;
    Boja:number;

    constructor(password: string, boja:number){
        this.Password = password;
        this.Boja = boja;
    }

    srediSifru():void 
    {
        const trenutnaSifra= this.Password.split(" ");
        var sifra:any;
        var i =0;
        trenutnaSifra.forEach((el,ind) => {
            if(ind % 2 == 0)
            {
                sifra[i]= el;
                i++;
            }
    })
        this.Password = sifra;
    }
}
