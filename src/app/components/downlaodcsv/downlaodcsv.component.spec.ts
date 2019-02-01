import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlaodcsvComponent } from './downlaodcsv.component';

describe('DownlaodcsvComponent', () => {
  let component: DownlaodcsvComponent;
  let fixture: ComponentFixture<DownlaodcsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownlaodcsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlaodcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
