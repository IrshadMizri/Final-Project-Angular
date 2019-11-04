import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendordetails',
  templateUrl: './vendordetails.component.html',
  styleUrls: ['./vendordetails.component.scss']
})
export class VendordetailsComponent implements OnInit {

  vId: number;
  vendor: Vendor;

  constructor(private route: ActivatedRoute, private vendorService: VendorService,
    private router: Router) { }

  ngOnInit() {
    this.vendor;
    this.vId = this.route.snapshot.params['vId'];
    console.log("param: " + this.route.snapshot.params['vId']);
    console.log("detailscomp: " + this.vId);
    this.vendorService.getVendor(this.vId)
      .subscribe(data => {
        console.log(data)
        this.vendor = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['home/vendordet']);
  }

}
