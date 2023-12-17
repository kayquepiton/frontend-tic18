import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UescContentComponent } from './uesc-content.component';

describe('UescContentComponent', () => {
  let component: UescContentComponent;
  let fixture: ComponentFixture<UescContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UescContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UescContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
