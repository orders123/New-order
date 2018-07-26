/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Appproduct } from './product.component';

describe('ProductComponent', () => {
   let component: Appproduct;
  let fixture: ComponentFixture<Appproduct>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appproduct ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
