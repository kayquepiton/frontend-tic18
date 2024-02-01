import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarObjetoComponent } from './adicionar-objeto.component';

describe('AdicionarObjetoComponent', () => {
  let component: AdicionarObjetoComponent;
  let fixture: ComponentFixture<AdicionarObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarObjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionarObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
