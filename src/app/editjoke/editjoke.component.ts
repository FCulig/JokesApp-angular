import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JokeComponent } from '../joke/joke.component';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-editjoke',
  templateUrl: './editjoke.component.html',
  styleUrls: ['./editjoke.component.css']
})
export class EditjokeComponent implements OnInit {

  @Input() jk: Joke;

  editJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required)
  })

  constructor(private modalService: NgbModal, private jokeService:JokeService, private jokeComponenet: JokeComponent) { }

  ngOnInit() {
  }

  onSubmit(id: number){
    this.jokeService.editJoke(this.editJokeForm.value.joke, id).subscribe();
    this.jokeComponenet.getJokes();
    this.jk = null;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  }

}