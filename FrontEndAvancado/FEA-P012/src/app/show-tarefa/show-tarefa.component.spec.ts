import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTarefaComponent } from './show-tarefa.component';

describe('ShowTarefaComponent', () => {
  let component: ShowTarefaComponent;
  let fixture: ComponentFixture<ShowTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTarefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
