import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarefasComponent } from './edit-tarefas.component';

describe('EditTarefasComponent', () => {
  let component: EditTarefasComponent;
  let fixture: ComponentFixture<EditTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditTarefasComponent]
    });
    fixture = TestBed.createComponent(EditTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
