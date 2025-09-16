import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnyDetailComponent } from './bunny-detail.component';

describe('BunnyDetailComponent', () => {
  let component: BunnyDetailComponent;
  let fixture: ComponentFixture<BunnyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BunnyDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BunnyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
