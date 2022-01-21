import { inject, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Doctor } from 'src/doctor';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiService]
    });

  });

  beforeEach(()=>{
    service=TestBed.get(ApiService)
  })

  
  it('should retrieve posts from the Api via GET',()=>{
    
    expect(service.getName()).toBe('surya');
  });
});

