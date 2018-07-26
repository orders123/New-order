import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SalesCategoryComponant} from './salescategory.component';

import {Post} from '../post';


@Injectable()
export class SalesCategoryService {

  constructor(public _http :Http) { }


//   salescategoryDetails(): Observable<Post[]>{

//     return this._http.get("/CategoryDetail")
//    .map((response: Response) => <Post[]>response.json());
//  }


  //   salesCategory(): Observable<Post[]>{

  //  return this._http.get("/")
   
  // .map((response: Response) => <Post[]>response.json());
 
 

  // }


  salescategoryDetails(): Observable<Post[]>{

    return this._http.get("/CategoryDetail")
   .map((response: Response) => <Post[]>response.json());
  
 
   }


}


