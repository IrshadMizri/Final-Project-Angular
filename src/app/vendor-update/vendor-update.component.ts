import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../vendor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.scss']
})
export class VendorUpdateComponent implements OnInit {

  vId: number;
  vendor: Vendor;
  editVendorForm: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private toaster: ToastrService,
    private vendorService: VendorService, private fb: FormBuilder) { }

    vendors: Observable<Vendor[]>;

  ngOnInit() {
    this.vendor = new Vendor();
    this.createForm();
    this.vId = this.route.snapshot.params['vId'];
    console.log("vendorid: "+this.route.snapshot.params['vId']);

    this.vendorService.getVendor(this.vId)
    .subscribe(data => {
      console.log(this.vId)
      console.log(data)
      this.vendor = data;
     }, error => console.log(error))
  }

  createForm() {
    this.editVendorForm = this.fb.group({
      vName: ['', Validators.required],
      vAddress: ['', Validators.required],
      vLocation: ['', Validators.required],
      vService: ['', Validators.required],
      vPincode: ['', Validators.required],
      cName: ['', Validators.required],
      cDepartment: ['', Validators.required],
      cEmail: ['', Validators.required,Validators.email],
      cPhone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.updateVendor();
  }

  updateVendor()
  {
    
    
      console.log("update"+this.vId+this.vendor);
      this.vendorService.updateVendor(this.vId,this.vendor)
      .subscribe(data=>console.log(data),error=>console.log(error));
      this.vendor=new Vendor();
      this.toaster.success(' successfully updated!','toastrupdate');
      this.gotoList();
    
  }



  gotoList() {
    this.vendors = this.vendorService.getVendors();
    this.router.navigate(['/home/showvendor']);
  }

}
