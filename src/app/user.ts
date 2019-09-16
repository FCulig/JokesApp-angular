export class User{
    id: number;
    username: string;
    password: string;
    authdata?: string;

    constructor(userId: number){
        this.id = userId;
    }
}