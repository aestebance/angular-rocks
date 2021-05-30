import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsGalleryComponent } from './bands-gallery.component';

describe('BandsGalleryComponent', () => {
  let component: BandsGalleryComponent;
  let fixture: ComponentFixture<BandsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
