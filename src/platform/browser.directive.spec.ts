/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Browser } from './browser.directive';

describe('Browser Directive', () => {
  it('should create an instance', () => {
    let directive = new Browser();
    expect(directive).toBeTruthy();
  });
});
