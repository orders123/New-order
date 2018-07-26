import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { URLSearchParams } from '@angular/http';

import {Post} from './post';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }


    projectDetails(): Observable<Post[]>{

   return this._http.get("/kkkk")
  .map((response: Response) => <Post[]>response.json());
 

  }


}
