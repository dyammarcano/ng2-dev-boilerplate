/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { InitService } from './init.service';

describe('Service: Init', () => {
  beforeEach(() => {
    addProviders([InitService]);
  });

  it('should ...',
    inject([InitService],
      (service: InitService) => {
        expect(service).toBeTruthy();
      }));
});
