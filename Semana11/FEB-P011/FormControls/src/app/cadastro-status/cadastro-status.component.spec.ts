import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroStatusComponent } from './cadastro-status.component';

describe('CadastroStatusComponent', () => {
  let component: CadastroStatusComponent;
  let fixture: ComponentFixture<CadastroStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
