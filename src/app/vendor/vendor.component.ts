import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators }  from  '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {



  constructor() { }

  vendorForm= new FormGroup({
    Name: new FormControl(" ",Validators.required ),
    Mobile: new FormControl(" ",Validators.required ),
    email: new FormControl(" ",Validators.required),
    Address: new FormControl(" ",Validators.required),
    Comapny: new FormControl(" ",Validators.required)
  });
  onSubmit(){
   alert("kkkkk")
    console.log(this.vendorForm.value);
  }
  ngOnInit() {
  }

}
