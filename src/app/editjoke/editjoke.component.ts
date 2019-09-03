import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-editjoke',
  templateUrl: './editjoke.component.html',
  styleUrls: ['./editjoke.component.css']
})
export class EditjokeComponent implements OnInit {

  @Input() jk: Joke;

  constructor() { }

  ngOnInit() {
  }

}
