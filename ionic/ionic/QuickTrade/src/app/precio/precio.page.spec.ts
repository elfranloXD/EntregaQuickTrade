import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrecioPage } from './precio.page';

describe('PrecioPage', () => {
  let component: PrecioPage;
  let fixture: ComponentFixture<PrecioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrecioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
