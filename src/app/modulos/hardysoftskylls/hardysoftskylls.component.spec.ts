import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysoftskyllsComponent } from './hardysoftskylls.component';

describe('HardysoftskyllsComponent', () => {
  let component: HardysoftskyllsComponent;
  let fixture: ComponentFixture<HardysoftskyllsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysoftskyllsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardysoftskyllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
