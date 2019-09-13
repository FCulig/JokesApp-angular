import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
 
import { Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { JokeService } from '../joke.service';
import { JokeItemComponent } from '../joke-item/joke-item.component';


@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.scss']
})
@NgModule({
  imports: [
      ReactiveFormsModule,
      FormGroup
  ],
  declarations: [
  ],
  bootstrap: []
})
export class AddJokeComponent implements OnInit {

  addJokeForm = new FormGroup({
    joke: new FormControl('', Validators.required)
  });

  constructor(private jokeService: JokeService,
    private jokeItemList: JokeItemComponent, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.jokeService.addJoke(this.addJokeForm.value.joke, Number(sessionStorage.getItem('id'))).subscribe(joke => {
      this.jokeItemList.getJokesWithParams();
    });
    this.modalService.dismissAll();
    this.addJokeForm.reset();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }


}
