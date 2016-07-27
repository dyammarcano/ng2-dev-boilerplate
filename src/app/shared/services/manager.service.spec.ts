/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ManagerService } from './manager.service';

describe('Service: Manager', () => {
  beforeEach(() => {
    addProviders([ManagerService]);
  });

  it('should ...',
    inject([ManagerService],
      (service: ManagerService) => {
        expect(service).toBeTruthy();
      }));
});
