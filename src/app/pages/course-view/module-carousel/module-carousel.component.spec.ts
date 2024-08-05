import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCarouselComponent } from './module-carousel.component';

describe('ModuleCarouselComponent', () => {
  let component: ModuleCarouselComponent;
  let fixture: ComponentFixture<ModuleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
