/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TablesComponent } from './tables.component';

describe('Component: Tables', () => {
  it('should create an instance', () => {
    let component = new TablesComponent();
    expect(component).toBeTruthy();
  });
});
