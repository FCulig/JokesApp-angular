import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user';
import { Joke } from './joke';

class JokeMock {
  id: number;
  joke: string;
  timestamp: string;
  author: User;
}

describe('UserService', () => {
  let mockUsers: User[];
  let mockLikedJokes: JokeMock[];
  let mockDislikedJokes: JokeMock[];

  let service: UserService;
  let backend: HttpTestingController;

  beforeEach(() => {
    

    mockUsers = [{
      id: 1,
      username: "testuser1",
      password: "123"
    }, {
      id: 2,
      username: "testuser2",
      password: "123"
    }];

    mockLikedJokes = [{
      "timestamp": "2019-09-16",
      "joke": "Joke",
      "id": 7,
      "author": {
        id: 1,
        username: "testuser1",
        password: "123"
      }
    },
    {
      "timestamp": "2019-09-16",
      "joke": "Joke",
      "id": 10,
      "author": {
        id: 1,
        username: "testuser1",
        password: "123"
      }
    }];

    mockDislikedJokes = [{
      "timestamp": "2019-09-16",
      "joke": "Joke",
      "id": 8,
      "author": {
        id: 1,
        username: "testuser1",
        password: "123"
      }
    },
    {
      "timestamp": "2019-09-16",
      "joke": "Joke",
      "id": 9,
      "author": {
        id: 1,
        username: "testuser1",
        password: "123"
      }
    }]

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(UserService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should get list of all users', () => {
    service.getAllUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/users'
    }).flush(mockUsers);
  });

  it('should get user with id', () => {
    const id = 1;

    service.getUserWithId(id).subscribe(user => {
      expect(user).toEqual(mockUsers[id]);
    });

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/users/' + id
    }).flush(mockUsers[id]);

  });

  it('get liked jokes from user', () => {
    const id = "1";

    service.getLikedJokes(id).subscribe(jokes => {
      expect(jokes).toEqual(mockLikedJokes);
    })

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/users/' + id + '/liked'
    }).flush(mockLikedJokes);
  });

  it('get disliked joes from user', () => {
    const id = "1";

    service.getDislikedJokes(id).subscribe(jokes => {
      expect(jokes).toEqual(mockDislikedJokes);
    })

    backend.expectOne({
      method: 'GET',
      url: '//localhost:8080/users/' + id + '/disliked'
    }).flush(mockDislikedJokes);
  });

  it('edit user', () => {
    const id = "1";
    const newUsername = "1st user edited";

    let expectedUser = {
      id: 1,
      username: "testuser1",
      password: "123"
    };

    service.editUser(id, newUsername).subscribe(user => {
      expect(user).toEqual(expectedUser);
    });

    backend.expectOne({
      method: 'POST',
      url: '//localhost:8080/users/' + id
    }).flush(expectedUser);
  })
});