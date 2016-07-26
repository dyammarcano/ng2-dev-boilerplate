/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AcountComponent } from './acount.component';

describe('Component: Acount', () => {
  it('should create an instance', () => {
    let component = new AcountComponent();
    expect(component).toBeTruthy();
  });
});
