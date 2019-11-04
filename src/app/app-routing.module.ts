import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { VendorComponent } from './vendor/vendor.component';
import { CreatevendorComponent } from './vendorcreate/createvendor.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { VendordetailsComponent } from './vendordetails/vendordetails.component';
import { UserGuard } from './user.guard';



const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login', component:UserComponent},
  {path:'home', component:HomeComponent,
  children: [
    {path:'showvendor', component:VendorComponent},
    {path:'createvendor', component:CreatevendorComponent},
    {path:'updatevendor/:vId', component:VendorUpdateComponent},
    {path:'vendordetails/:vId', component:VendordetailsComponent}
  ],canActivate: [UserGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
