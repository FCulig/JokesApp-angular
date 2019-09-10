import { User } from './user';
import { JokeService } from './joke.service';
 
export class Joke{
    id: number;
    joke: string;
    private _likes: number;
    private _dislikes: number;
    timestamp: string;
    author: User;

    constructor(jokeText: string, auth: User, jokeService: JokeService){
        this.joke=jokeText;
        this.author=auth;
    }

    set likes(lik: number){
        this.likes = lik;
    }

    set dislikes(dislik: number){
        this.dislikes = dislik;
    }
}