import { Component, OnInit } from '@angular/core';
import { InventoryGroupService } from './inventorygroup.service';


import {Http ,Response } from '@angular/http';

import {Post} from '../post';
@Component({
 
 selector :'my-inventorygroup',
 templateUrl:'./inventorygroup.component.html',

 styleUrls:['./inventorygroup.component.css'],


 providers: [InventoryGroupService]




})






export class InventorygroupComponent implements OnInit {



    inventorytype=[];
    groupid;
    sort;
    groupname;
    alias;

    invgroupEdit:boolean;
 



    constructor( private inventoryGroup:InventoryGroupService, private http: Http) {

        this.invgroupEdit=false;

    }

    ngOnInit() {



        alert("hhhh");


        this.inventoryGroup.inventoryGroupDetails()
        .subscribe(typeData => this.inventorytype= typeData);
        console.log(this.inventorytype);
        
    
    



   
    // this.inventoryGroup.salescategoryDetails()
    // .subscribe(typeData => this.inventorytype= typeData);
    // console.log(this.inventorytype);
    



    }

    invDelete(inv){

     alert(inv.InvGroupId);

     alert(inv.InvGroupName);

     alert(inv.Alias);

     alert(inv.SortOrder);


     alert(inv._id);

     var invid=inv._id;

    

     this.http.delete('/invsGroup' + invid ,{})
     .subscribe(result=>{console.log(result)})
    
    }



    // invEdit(invedit){
    
    //     alert(invedit.InvGroupId);
    //     this.groupid=invedit.InvGroupId



    //     alert(invedit.InvGroupName);

    //     this.groupname=invedit.InvGroupName



    //     alert(invedit.Alias);
    //     this.alias=invedit.Alias
   
    //     alert(invedit.SortOrder);
   
    //     this.sort=invedit.SortOrder
    //     alert(invedit._id);
   
    //     var invid=invedit._id;
   


    // }

    inveditid:any;
    invEdit(inv){


       this.invgroupEdit=true;
   


    // this.editCat=true;
 
    alert (inv.InvGroupId);
    this.groupid=inv.InvGroupId;

    alert (inv.InvGroupName);
    this.sort=inv.InvGroupName;
    alert (inv.Alias);
    this.groupname=inv.Alias;
    
    alert(inv.SortOrder);

    this.alias=inv.SortOrder;
    
  
  
    alert(inv._id);
    this.inveditid=inv._id


    }



    invUpdate(invid,invnam,invali,invsrt){
        alert(invid);
        alert(invnam);
        alert(invali);
        alert(invsrt);
    
       console.log (this.inveditid);
       
    
       let b=invid+ ','+ invnam + ','+invali + ',' +invsrt +' ,'+ this.inveditid;
      
       this.http.post('/editinventory'+ b , {})
       
    
       .subscribe(result=>{console.log(result)})
    
     
    
    }








    invGroup(groupid,sort,groupname,alias)
    {

        alert(groupid);
        alert(sort);
        alert(groupname);
        alert(alias);



                   
        
     let c=groupid+ ','+ sort + ','+groupname + ','+alias;

     this.http.post('/inventoryGroup'+ c, {})
        

        .subscribe(result=>{console.log(result)})


    }



}