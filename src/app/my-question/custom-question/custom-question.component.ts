import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-question',
  templateUrl: './custom-question.component.html',
  styleUrls: ['./custom-question.component.css']
})
export class CustomQuestionComponent implements OnInit {
  @Input() question: any;
  @Input() i: number;
  @Input() inputName: string;
  @Input() answerData: any;

  constructor() { }

  ngOnInit() {
  }

  getAnswer():any {
    if(this.answerData) {
      return this.answerData.answers;
    }
  };

}
