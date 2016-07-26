/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InitService } from './init.service';

describe('Init Service', () => {
  beforeEachProviders(() => [InitService]);

  it('should ...',
      inject([InitService], (service: InitService) => {
    expect(service).toBeTruthy();
  }));
});
