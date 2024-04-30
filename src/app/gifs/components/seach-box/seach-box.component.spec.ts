import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachBoxComponent } from './seach-box.component';

describe('SeachBoxComponent', () => {
  let component: SeachBoxComponent;
  let fixture: ComponentFixture<SeachBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
