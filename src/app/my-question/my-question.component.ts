import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-my-question',
  templateUrl: './my-question.component.html',
  styleUrls: ['./my-question.component.css']
})
export class MyQuestionComponent implements OnInit {
  @Input() question: any;
  @Input() i: number;
  @Input() inputName: string;
  @Input() answerData: any;

  constructor() {
  }

  ngOnInit() {
  }

  getInputName(): string {
    if (this.inputName) {
      return this.inputName + '_' + (this.i + 1);
    } else {
      return 'Q' + (this.i + 1);
    }
  }

}
