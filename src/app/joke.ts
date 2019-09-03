import { User } from './user';
 
export class Joke{
    id: number;
    joke: string;
    likes: number;
    dislikes: number;
    timestamp: string;
    author: User;
}