import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers  } from '@angular/http';
import { FormGroup, FormControl,Validators }  from  '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewitemService } from './newitem.service';
 import { URLSearchParams } from '@angular/http';

 import {Post} from '../post';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'my-newitem',
  styleUrls: ['./newitem.component.css'] ,
  // templateUrl: './newitem.component.html',
  templateUrl:'./newitem.component.html',
  // template: '<h4 style="margin-left:200px">Inventoryyyyyyyyyyyyyyyyyyyyyyyyyy</h4>'
  providers: [NewitemService]
                      
  
})
export class NewitemComponent implements OnInit {
  resulttypes=[];
  resultcategory=[];
  resultinvgrp=[];
  resulttax=[];
  resulttypeids:Object={};
  resultcatids=[];
  selcteditymtype=[];
  newdwtails: Object = {};
  selectedItems:Object={};
  review: Object = {};
  // selectedItems1: Object = {};
  typeid123:Object={};
  alldetails:Object={};

  itemName:any;itemType:any;
   urlSearchParams={};
   itemTypeId:any;
   typeid:Object={};
   details345:Object={};
<<<<<<< HEAD
=======
   url:any;
>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132
    //  ,sku,category,brand,invgrp,discription,tax

    constructor(private _itemservice: NewitemService,private  http: Http) { }
  
  //////////// forms control/////////////////////////////////////////
  userForm= new FormGroup({
    itemName: new FormControl(" ",Validators.required),
    itemType: new FormControl(" ",Validators.required),
    Sku:      new FormControl(" ",Validators.required), 
    salecagory: new FormControl(" ",Validators.required),
    Brand:new FormControl(" ",Validators.required),
    InvGroup:new FormControl(" ",Validators.required), 
    uom:new FormControl(" ",Validators.required),
    tax:new FormControl(" ",Validators.required),
<<<<<<< HEAD
    Desc:new FormControl(" ",Validators.required)
  });
  onSubmit(){
    
=======
    Desc:new FormControl(" ",Validators.required),
    image :new FormControl()
  });
  onSubmit(){
    console.log(this.url)
>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132
    console.log(this.userForm.value.itemName);

   var itemName=this.userForm.value.itemName;
   console.log(itemName);
   var itemType=this.userForm.value.itemType;
   console.log(itemType);
   var sku=this.userForm.value.Sku;
   console.log(sku)
   var salecagory=this.userForm.value.salecagory;
   console.log(salecagory);
   var InvGroup=this.userForm.value.InvGroup;
   console.log(InvGroup)
   var brand=this.userForm.value.Brand;
   var desc=this.userForm.value.Desc;
   var uom=this.userForm.value.uom;
   var tax=this.userForm.value.tax;
<<<<<<< HEAD
=======
   var image=this.userForm.value.image
   var Url=this.url;
>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132
  //  var description123= this.userForm.value.Description;
   var date = new Date().toLocaleDateString();

   this.alldetails={ 
    Name:itemName,
    Type:itemType,
    category:salecagory,
    invgroup:InvGroup,
    sku:sku,
    brand:brand,
    uom:uom,
    tax:tax,
     date:date,
<<<<<<< HEAD
     desc:desc
=======
     desc:desc,
     image:image,
     Urlimage:Url

>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132
    // description33:description123

  }

  console.log(this.alldetails);
  this.http.post('/1234',this.alldetails)
  .subscribe(data => {console.log(data);
});

    //  this.alldetails=itemName+","+itemType

    

    //  this.details345={
    //    firstname:itemName,
    //    lastname:itemType

    //  }
    //  console.log(this.details345);

     

   

//    this.http.post('/vijay'+this.alldetails,{})
//    .subscribe(data => {console.log(data);
//  });
  //    this.http.post('/vijay/'+this.alldetails,{},{})
  //    .subscribe(data => {console.log(data);
  //  });

//// getting typeId//////////////

 
// this._itemservice.getitemtypeid(itemType)
// .subscribe(typeid => this.resulttypeids= typeid);
//  console.log(this.resulttypeids);
 
//////////////// getting category id//////////////////
// this._itemservice.categoryid(salecagory)
// .subscribe(catid => this.resultcatids= catid);
// console.log(this.resultcatids);


// let urlSearchParams = new URLSearchParams();
//       urlSearchParams.append('itemName',itemName );
//       urlSearchParams.append('itemType',itemType);
//       urlSearchParams.append('sku',sku );
      
       
      
        
    
  }
   


   cancel(){
     alert("kkkkkkkkkkkk")

    //  this.userForm.value.itemName.reset();
    // this.userForm.value={};

    // this.userForm.value.itemName="shivu";
   }
  
<<<<<<< HEAD
=======
   name:any;
   readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
        this.name =event.target.result.filename;
        console.log(this.url)
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
>>>>>>> 06060b1a0c18b79b36b2ad15de693bbe8e829132

  ngOnInit() {

    alert("hhhh")
    
    this._itemservice.itemtypedetails()
    .subscribe(typeData => this.resulttypes= typeData);
    console.log(this.resulttypes);

    this._itemservice.categorydetails() 
    .subscribe(categoryData => this.resultcategory= categoryData);
    console.log(this.resultcategory);
    
    this._itemservice.invgrpdetails() 
    .subscribe(invgrpData => this.resultinvgrp= invgrpData);
    console.log(this.resultinvgrp);

    this._itemservice.taxdetails() 
    .subscribe(taxData => this.resulttax= taxData);
    console.log(this.resulttax);
  }



  types(selectedtype){
     this._itemservice.selecttype(selectedtype) 
    .subscribe(seltype => this.selcteditymtype= seltype);
    console.log(this.selcteditymtype);
    

  }

  saveitemdetails(itemName,itemType
    ,sku,category,brand,invgrp,discription,uom,tax){

      alert("save")
      var date = new Date().toLocaleDateString();

 
      
       
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('itemName',itemName );
      urlSearchParams.append('itemType',itemType);
      urlSearchParams.append('sku',sku );
      urlSearchParams.append('category',category);
      urlSearchParams.append('brand',brand );
      urlSearchParams.append('invgrp',invgrp);
      urlSearchParams.append('discription',discription);
      urlSearchParams.append('tax',tax);
      urlSearchParams.append('date',date);
       
      
           this.http.post('/postDevicesName',urlSearchParams)
          .subscribe(data => {console.log(data);
        });


        
   
  }
 cancelAll()
 {
      this.selectedItems= [];
 }


}
