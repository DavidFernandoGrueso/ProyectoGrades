import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhComponent } from './listh.component';

describe('ListhComponent', () => {
  let component: ListhComponent;
  let fixture: ComponentFixture<ListhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
