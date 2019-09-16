import { TestBed } from '@angular/core/testing';

import { JokeService } from './joke.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';
import { Joke } from './joke';
import { equal } from 'assert';

describe('JokeService', () => {
  let mockJokes: Joke[];
  let mockJoke: Joke;

  let service: JokeService;
  let backend: HttpTestingController;

  beforeEach(() => {

    mockJoke = {
      "timestamp": "2019-09-16",
      "joke": "This is a joke",
      "id": 1,
      "author": {
        "id": 1,
        "username": "1st user edited",
        "password": "$2a$10$pMTTOq0fyWWqbSlLsBj2CO3PN2vAIadtHhbhAJJyY/E2AB3mptRc6"
      },
      "likes": 0,
      "dislikes": 0
    }

    mockJokes = [
      {
        "timestamp": "2019-09-16",
        "joke": "Joke",
        "id": 6,
        "author": {
          "id": 1,
          "username": "1st user edited",
          "password": "testpass"
        },
        "likes": 0,
        "dislikes": 0
      }, {
        "timestamp": "2019-09-16",
        "joke": "Joke",
        "id": 7,
        "author": {
          "id": 1,
          "username": "1st user edited",
          "password": "testpass"
        }
        ,
        "likes": 0,
        "dislikes": 0
      }, {
        "timestamp": "2019-09-16",
        "joke": "Joke",
        "id": 8,
        "author": {
          "id": 1,
          "username": "1st user edited",
          "password": "testpass"
        }
        ,
        "likes": 0,
        "dislikes": 0
      }
    ];

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(JokeService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: JokeService = TestBed.get(JokeService);
    expect(service).toBeTruthy();
  });

  it('should get all jokes', () => {
    service.getJokes().subscribe(jokes => {
      expect(jokes).toEqual(mockJokes);
    });

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/jokes'
    }).flush(mockJokes);
  });

  it('should add new joke', () => {
    const joke = "This is a joke";
    const userId = 1;

    service.addJoke(joke, userId).subscribe(val => {
      expect(val).toEqual(mockJoke);
    })

    backend.expectOne({
      method: 'POST',
      url: '//localhost:8080/jokes'
    }).flush(mockJoke);
  });

  it('should edit a joke', () => {
    const joke = "New joke text";
    const jokeId = 1;

    let editedMockJoke = mockJoke;

    editedMockJoke["joke"] = joke;

    service.editJoke(joke, jokeId).subscribe(editedJoke => {
      expect(editedJoke).toEqual(editedMockJoke)
    })

    backend.expectOne({
      method: 'POST',
      url: '//localhost:8080/jokes/' + jokeId
    }).flush(editedMockJoke);
  });

  it('should like joke', () => {
    const jokeId = 1;
    const userId = "1";
    let likedMockJoke = mockJoke;
    likedMockJoke["likes"] = 1;

    service.likeJoke(jokeId, userId).subscribe(likedJoke => {
      expect(likedJoke).toEqual(likedMockJoke);
    })

    backend.expectOne({
      method: 'POST',
      url: '//localhost:8080/users/' + userId + '/like/' + jokeId
    }).flush(likedMockJoke);
  });

  it('should dislike joke', () => {
    const jokeId = 1;
    const userId = "1";
    let dislikedMockJoke = mockJoke;
    dislikedMockJoke["dislikes"] = 1;

    service.dislikeJoke(jokeId, userId).subscribe(dislikedJoke => {
      expect(dislikedJoke).toEqual(dislikedMockJoke);
    })

    backend.expectOne({
      method: 'POST',
      url: '//localhost:8080/users/' + userId + '/dislike/' + jokeId
    }).flush(dislikedMockJoke);
  });

  it('should get top jokes', () => {
    const n = 3;

    service.topJokes(n).subscribe(topJokes => {
      expect(topJokes).toEqual(mockJokes);
    })

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/jokes/best?n=' + n
    }).flush(mockJokes);
  });

  it('should get jokes from date', () => {
    const date = "2019-09-16";

    service.getFromDate(date).subscribe(jokesFromDate => {
      expect(jokesFromDate).toEqual(mockJokes);
    });

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/jokes?date=' + date
    }).flush(mockJokes);
  });

  it('should get jokes from user', () => {
    const userId = 1;

    service.getJokesFromUser(userId).subscribe(usersJokes => {
      expect(usersJokes).toEqual(mockJokes);
    });

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/users/' + userId + '/jokes'
    }).flush(mockJokes);
  });

  it('should delete joke', () => {
    const jokeId = 8;

    let deleted = mockJokes.pop();

    service.deleteJoke(jokeId).subscribe(val => {
      expect(val).toEqual(deleted);
    })

    backend.expectOne({
      method: 'DELETE',
      url: '//localhost:8080/jokes/' + jokeId
    }).flush(deleted);
  });

  it('should get users favorite jokes', () => {
    const userId = "2";

    service.getUsersFavoriteJokes(userId).subscribe(val => {
      expect(val).toEqual(mockJokes);
    })

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/users/' + userId + '/favorites'
    }).flush(mockJokes);
  });
});
