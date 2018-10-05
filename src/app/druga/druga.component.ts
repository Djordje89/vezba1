import { Component, OnInit } from '@angular/core';
import { PrvaComponent } from '../prva.component';

@Component({
  selector: 'app-druga',
  templateUrl: './druga.component.html',
  styleUrls: ['./druga.component.css']
})
export class DrugaComponent implements OnInit {

  puzzles: PrvaComponent[];
  strings = ['jedan','dva','tri'];
  constructor() {
    this.puzzles = [
      {question:"Sta je bolje, pica ili pivo?", solution: "Oboje!"},
      {question:"Sta je prvo koka ili jaje?", solution: "Pojma nemam!"},
      {question:"Kad se zavrsava posao?", solution: "Upravo sad!"}
    ];
   }

  ngOnInit() {
  }

}
