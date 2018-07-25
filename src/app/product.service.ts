import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { URLSearchParams } from '@angular/http';

import {Post} from './post';

@Injectable()
export class ProductService {

  private messageSource = new BehaviorSubject("not working");
  currentMessage = this.messageSource.asObservable();

  constructor(private _http: Http) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  //   projectDetails(): Observable<Post[]>{

  //  return this._http.get("/kkkk")
  // .map((response: Response) => <Post[]>response.json());
 

  // }

  configDetails(): Observable<Post[]>{

    return this._http.get("/allItems")
   .map((response: Response) => <Post[]>response.json());
  
 
   }

  //  deleteDetails(name): Observable<Post[]>{

  //   return this._http.delete("/onedelete",name)
  //  .map((response: Response) => <Post[]>response.json());
  
 
  //  }


}
