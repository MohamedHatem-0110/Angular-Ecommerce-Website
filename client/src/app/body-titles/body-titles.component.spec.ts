import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTitlesComponent } from './body-titles.component';

describe('BodyTitlesComponent', () => {
  let component: BodyTitlesComponent;
  let fixture: ComponentFixture<BodyTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyTitlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
