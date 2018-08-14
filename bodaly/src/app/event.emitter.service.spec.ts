import { TestBed, inject } from '@angular/core/testing';

import { Event.EmitterService } from './event.emitter.service';

describe('Event.EmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Event.EmitterService]
    });
  });

  it('should be created', inject([Event.EmitterService], (service: Event.EmitterService) => {
    expect(service).toBeTruthy();
  }));
});
