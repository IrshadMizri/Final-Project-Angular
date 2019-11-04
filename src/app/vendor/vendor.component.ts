import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  vendors: Observable<Vendor[]>

  constructor(private vendorService: VendorService, private toaster: ToastrService, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    console.log("reloadata");
    this.vendors = this.vendorService.getVendors();
    console.log(this.vendors);
  }

  deleteVendorDet(vId: number, vendordet: Vendor) {
    if (confirm("Are you sure you want to ddisable?")) {
      this.vendorService.deleteVendor(vId, vendordet)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => {
            console.log(error);
          });
      this.toaster.error('Vendor Succesfully Disabled', 'Vendor Deletion Status');
    }
    else {
      this.toaster.error('Vendor not Disabled', 'Vendor Deletion Status');
      this.reloadData();
    }

  }

  details(vId: number) {
    console.log("vendordetcomp" + vId);
    this.router.navigate(['vendordetails', vId]);
  }

  searchString:String;
  //search 

  search(searchString){
    console.log(searchString);
    if(searchString!=null){
      this.vendors=this.vendorService.search(this.searchString);

  
  }else{
    console.log("Else :" +searchString);
    this.reloadData();
  }
}


}
