 
import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service';

import {Post} from './post';

@Component ({
   selector: 'my-product',
//    template: 'Products',
templateUrl: 'product.component.html',
styleUrls: ['./product.component.css']
})
export   class   Appproduct implements OnInit {
 
 result:Post[];
 opalName: string;

 constructor(private module: ProductService) {
 
  }
  ngOnInit() {

  	 

    this.module.projectDetails().subscribe(moduleData => this.result = moduleData);
    console.log(this.result)

    
}
}