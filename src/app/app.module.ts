import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyQuestionComponent } from './my-question/my-question.component';
import { TextQuestionComponent } from './my-question/text-question/text-question.component';
import { SingleSelectionQuestionComponent } from './my-question/single-selection-question/single-selection-question.component';
import { MultipleSelectionQuestionComponent } from './my-question/multiple-selection-question/multiple-selection-question.component';
import { CustomQuestionComponent } from './my-question/custom-question/custom-question.component';
import { TransformABCDPipe } from './transform-abcd.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyQuestionComponent,
    TextQuestionComponent,
    SingleSelectionQuestionComponent,
    MultipleSelectionQuestionComponent,
    CustomQuestionComponent,
    TransformABCDPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
