import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterhoComponent } from './footerho.component';

describe('FooterhoComponent', () => {
  let component: FooterhoComponent;
  let fixture: ComponentFixture<FooterhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
