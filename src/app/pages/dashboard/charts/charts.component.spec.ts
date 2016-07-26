/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChartsComponent } from './charts.component';

describe('Component: Charts', () => {
  it('should create an instance', () => {
    let component = new ChartsComponent();
    expect(component).toBeTruthy();
  });
});
