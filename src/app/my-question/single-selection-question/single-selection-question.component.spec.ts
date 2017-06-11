import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionQuestionComponent } from './single-selection-question.component';

describe('SingleSelectionQuestionComponent', () => {
  let component: SingleSelectionQuestionComponent;
  let fixture: ComponentFixture<SingleSelectionQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectionQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
