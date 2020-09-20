export interface ILoggingUser{
    username:string;
    password:string;
}

export class LoggingUser implements ILoggingUser{
    username: string;
    password: string;

    constructor(user: string, pass: string){
        this.username = user;
        this.password = pass;
    }
}
