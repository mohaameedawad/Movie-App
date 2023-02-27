import { ComponentFixture, TestBed } from '@angular/core/testing';

import { homeMidSectionsComponent } from './homeMidSections.component';

describe('MoviesComponent', () => {
  let component: homeMidSectionsComponent;
  let fixture: ComponentFixture<homeMidSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homeMidSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(homeMidSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
