import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { CreatevendorComponent } from './vendorcreate/createvendor.component';
import { VendordetailsComponent } from './vendordetails/vendordetails.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';

import {ToastrModule } from "ngx-toastr"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ NgxPaginationModule } from'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    VendorComponent,
    CreatevendorComponent,
    VendordetailsComponent,
    VendorUpdateComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
