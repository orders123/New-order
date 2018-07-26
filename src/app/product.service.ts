import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
<<<<<<< HEAD
=======
import { BehaviorSubject } from 'rxjs';
>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { URLSearchParams } from '@angular/http';

import {Post} from './post';

@Injectable()
export class ProductService {

<<<<<<< HEAD
  constructor(private _http: Http) { }


    projectDetails(): Observable<Post[]>{

   return this._http.get("/kkkk")
  .map((response: Response) => <Post[]>response.json());
 

  }
=======
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
>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132


}
