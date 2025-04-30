import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSwiperComponent } from './tv-swiper.component';

describe('TvSwiperComponent', () => {
  let component: TvSwiperComponent;
  let fixture: ComponentFixture<TvSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
