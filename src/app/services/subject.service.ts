import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  getAllSubjects(){
    
    return this.http.get('https://alapplication.herokuapp.com/admin/get-subjects')
    .toPromise()
    .then(response=>{
      return response;
    })
    .catch(error=>{
     throw error;
    })

  }
}
