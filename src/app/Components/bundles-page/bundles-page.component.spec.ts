import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlesPageComponent } from './bundles-page.component';

describe('BundlesPageComponent', () => {
  let component: BundlesPageComponent;
  let fixture: ComponentFixture<BundlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundlesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
