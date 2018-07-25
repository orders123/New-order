import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { URLSearchParams } from '@angular/http';

 import {Post} from '../post';

@Injectable()
 
export class NewitemService {

  constructor(private _http: Http) { }






  itemtypedetails(): Observable<Post[]>{

   return this._http.get("/getitemtypes")
  .map((response: Response) => <Post[]>response.json());
}

categorydetails(): Observable<Post[]>{

  return this._http.get("/getcategory")
 .map((response: Response) => <Post[]>response.json());

  
}

invgrpdetails(): Observable<Post[]>{

  return this._http.get("/getinvgrp")
 .map((response: Response) => <Post[]>response.json()
//  return response.json();
);
}

taxdetails(): Observable<Post[]>{

  return this._http.get("/gettax")
 .map((response: Response) => <Post[]>response.json());
} 


getitemtypeid(itemType): Observable<Post[]>{

  return this._http.get("/gettypeid"+itemType)
 .map((response: Response) => <Post[]>response.json());

  
}

categoryid(salecagory): Observable<Post[]>{

  return this._http.get("/getcateid"+salecagory)
 .map((response: Response) => <Post[]>response.json());

  
}



selecttype(selectedtype): Observable<Post[]>{

  return this._http.get("/getSelType"+selectedtype)
 .map((response: Response) => <Post[]>response.json());
}


}
