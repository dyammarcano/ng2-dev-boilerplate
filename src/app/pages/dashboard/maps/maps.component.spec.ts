/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MapsComponent } from './maps.component';

describe('Component: Maps', () => {
  it('should create an instance', () => {
    let component = new MapsComponent();
    expect(component).toBeTruthy();
  });
});
