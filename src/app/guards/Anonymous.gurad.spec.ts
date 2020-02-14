import { Anonymous } from './Anonymous.gurad';
import { TestBed, async, inject } from '@angular/core/testing';
  
 
describe('Anonymous', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Anonymous]
    });
  });

  it('should ...', inject([Anonymous], (guard: Anonymous) => {
    expect(guard).toBeTruthy();
  }));
});


