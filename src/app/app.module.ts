import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { Appproduct } from './product.component';
import { AppInventory } from './inventory/inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { NewitemComponent } from './newitem/newitem.component';
import { SaleComponent } from './sale/sale.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

import { URLSearchParams } from '@angular/http';
import { EditItemComponent } from './edit-item/edit-item.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { VendorComponent } from './vendor/vendor.component';
import { NewpurchaseComponent } from './newpurchase/newpurchase.component';


const appRoutes: Routes = [
   { path: 'Item', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
   { path: 'Sale', component: SaleComponent },
   { path: 'Newitem', component: NewitemComponent },
   { path: 'Edititem', component: EditItemComponent },
   { path: 'Vendor', component: VendorComponent },
   { path: 'Purchase', component: PurchaseComponent },
   { path: 'NEWPurchase', component: NewpurchaseComponent },
];

@NgModule ({
   imports: [ BrowserModule,FormsModule,HttpModule,ReactiveFormsModule,
   RouterModule.forRoot(appRoutes)],
   providers:[ProductService],
   declarations: [ AppComponent,Appproduct,AppInventory, NewitemComponent, SaleComponent, EditItemComponent, PurchaseComponent, VendorComponent, NewpurchaseComponent, NewpurchaseComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }