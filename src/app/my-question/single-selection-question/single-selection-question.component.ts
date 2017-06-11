import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-selection-question',
  templateUrl: './single-selection-question.component.html',
  styleUrls: ['./single-selection-question.component.css']
})
export class SingleSelectionQuestionComponent implements OnInit {
  @Input() question: any;
  @Input() i: number;
  @Input() inputName: string;
  @Input() answerData: any;

  constructor() { }

  ngOnInit() {
  }

  // getTip(i:number):string {
  //   switch
  // }

}
