import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheExampleComponent } from './cache-example.component';

describe('CacheExampleComponent', () => {
  let component: CacheExampleComponent;
  let fixture: ComponentFixture<CacheExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
