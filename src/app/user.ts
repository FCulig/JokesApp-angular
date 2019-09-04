export class User{
    id: number;
    username: string;

    constructor(userId: number){
        this.id = userId;
    }

    getUserId(){
        return this.id;
    }
}