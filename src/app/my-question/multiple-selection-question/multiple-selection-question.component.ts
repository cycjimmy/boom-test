import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-multiple-selection-question',
  templateUrl: './multiple-selection-question.component.html',
  styleUrls: ['./multiple-selection-question.component.css']
})
export class MultipleSelectionQuestionComponent implements OnInit {
  @Input() question: any;
  @Input() i: number;
  @Input() inputName: string;
  @Input() answerData: any;

  constructor() {
  }

  ngOnInit() {
  }

  getAnswer(arr: any | null) {
    console.log(arr);
    // let result = '';
    // if (arr) {
    //   arr.forEach(el => {
    //     switch (el) {
    //       case 0:
    //         result += 'A';
    //       case 1:
    //         result += 'B';
    //       case 2:
    //         result += 'C';
    //       case 3:
    //         result += 'D';
    //       default:
    //         result += '';
    //     }
    //   });
    // }
    //
    // return result;
  }

}
