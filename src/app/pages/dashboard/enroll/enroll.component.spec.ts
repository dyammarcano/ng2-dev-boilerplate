/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EnrollComponent } from './enroll.component';

describe('Component: Enroll', () => {
  it('should create an instance', () => {
    let component = new EnrollComponent();
    expect(component).toBeTruthy();
  });
});
