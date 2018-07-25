import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators }  from  '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newpurchase',
  templateUrl: './newpurchase.component.html',
  styleUrls: ['./newpurchase.component.css']
})
export class NewpurchaseComponent implements OnInit {

  constructor() { }

    vendorForm= new FormGroup({
      Vendor: new FormControl(" ",Validators.required),
      Discounts: new FormControl(" ",Validators.required),
 
   
  });

  onSubmit(){ 
    alert("kkkkkkkkk")
    console.log(this.vendorForm.value.Vendor);
  }

  ngOnInit() {
  }

}
