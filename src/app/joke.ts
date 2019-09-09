import { User } from './user';
import { JokeService } from './joke.service';
 
export class Joke{
    id: number;
    joke: string;
    likes: number;
    dislikes: number;
    timestamp: string;
    author: User;

    constructor(jokeText: string, auth: User){
        this.joke=jokeText;
        this.author=auth;
    }
}