


import { Component, OnInit } from '@angular/core';
import { SalesCategoryService } from './salescategory.service';
import {Post} from '../post';

import {Http ,Response } from '@angular/http';




@Component ({
   selector: 'my-category',

   templateUrl: './salescategory.component.html',


   styleUrls:['./salescategory.component.css'],
   providers: [SalesCategoryService]
   

})
export   class   SalesCategoryComponant implements OnInit {


  resulttypes=[];
  // salescategoryDetails;
    // new123:boolean;
    name1;
    name2;
    name3;

    editCat:boolean;
 
    
    
    

 

 
 constructor( private saleCategory:SalesCategoryService, private http: Http) {
  //  this.new123=false;
    
    this.editCat=false;


  
 
  }
  ngOnInit() {


 alert("gregl");
   
    this.saleCategory.salescategoryDetails()
    .subscribe(typeData => this.resulttypes= typeData);
    console.log(this.resulttypes);
    


    // this.module.configDetails().subscribe(moduleData => this.allItemDetails = moduleData);
    // console.log(this.allItemDetails)



    // saveModuleName(){
    //     //alert(this.moduleName)
    //     this.salesModuleName.moduleServiceDetails(this.moduleName)
        
    //        }
  	 

   

    // salescategoryDetails(): Observable<Post[]>{
    //     this._salesCategory. salescategoryDetails()
    // .subscribe(typeData => this.resulttypes= typeData);
    // console.log(this.resulttypes);


 }

deleteFun(sal){
 
  alert (sal.salecategory);
  alert (sal.SalesCategoryType);
  alert (sal.SortedOrderNo);


  alert(sal._id);
  var catsid=sal._id


  this.http.delete('/salCategory'+ catsid, {})
  
  .subscribe(result=>{console.log(result)})
  
 

 



  }

  editid:any;

  editFun(edit){

    this.editCat=true;
 
    alert (edit.salecategory);
    this.name1=edit.salecategory;

    alert (edit.SalesCategoryType);
    this.name2=edit.SalesCategoryType;
    alert (edit.SortedOrderNo);
    this.name3=edit.SortedOrderNo;
  
  
    alert(edit._id);
   this.editid=edit._id
  }


  salUpdate(catno,cattyp,edt){
    alert(catno);
    alert(cattyp);
    alert(edt);
   console.log (this.editid);
   

   let a=catno+ ','+ cattyp + ','+edt + ',' +this.editid;
  
   this.http.post('/editsalescategory'+ a  , {})
   

   .subscribe(result=>{console.log(result)})

 

 


    // var editid=edit._id
  
  
    // this. myCategory(this.name1,this.name2,this.name3)
    // {
    

  
        
    // this.http.post('/editsalescategory'+ _id, {})
          
  
    // .subscribe(result=>{console.log(result)})
 
    
  }



  
  myCategory(name1,name2,name3){
    alert(name1);
    alert(name2);
    alert(name3);
            
  let c=name1+ ','+ name2 + ','+name3;
  
          this.http.post('/myCategoryDetail'+ c, {})
          
  
          .subscribe(result=>{console.log(result)})

        
  
        }
  
      }
    
    
    // var catsid=sal._id
  
  
    // this.http.delete('/salCategory'+ catsid, {})
    
    // .subscribe(result=>{console.log(result)})
    
   
  
   
  
  
  
    

//   editRowId: any;

// toggle(id){
//   this.editRowId = id;
// }



 

 


 
 

//  DeleteRecord(i:any){
//    this.resulttypes.splice(i,1);
//  }



 
 
// new(){

//   this.new123=true;
// }

