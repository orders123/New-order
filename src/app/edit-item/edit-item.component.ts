import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Http,Response,Headers  } from '@angular/http';
import { EditItemService } from './edit-item.service'
 import { URLSearchParams } from '@angular/http';
 import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  providers: [EditItemService]
})
export class EditItemComponent implements OnInit {

  types=[];
  category=[];
  invgrp=[];
  tax=[];
  message:string;

    


  constructor(private module: ProductService,private  http: Http) { 
 
  }

  

 
   

  ngOnInit() {


    this.module.currentMessage.subscribe(message => this.message = message)

    // this.editservice.itemtypedetails()
    // .subscribe(typeData => this.types= typeData);
    // console.log(this.types);

    // this.editservice.categorydetails() 
    // .subscribe(categoryData => this.category= categoryData);
    // console.log(this.category);
    
    // this.editservice.invgrpdetails() 
    // .subscribe(invgrpData => this.invgrp= invgrpData);
    // console.log(this.invgrp);

    // this.editservice.taxdetails() 
    // .subscribe(taxData => this.tax= taxData);
    // console.log(this.tax);
   
  }


  //   newMessage() {
  //   this.module.changeMessage("Hello from Sibling")
  //  }
}
