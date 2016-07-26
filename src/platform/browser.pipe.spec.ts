/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BrowserPipe } from './browser.pipe';

describe('Pipe: Browser', () => {
  it('create an instance', () => {
    let pipe = new BrowserPipe();
    expect(pipe).toBeTruthy();
  });
});
