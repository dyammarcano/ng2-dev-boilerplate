/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ManagerService } from './manager.service';

describe('Manager Service', () => {
  beforeEachProviders(() => [ManagerService]);

  it('should ...',
      inject([ManagerService], (service: ManagerService) => {
    expect(service).toBeTruthy();
  }));
});
