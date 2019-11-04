import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createvendor',
  templateUrl: './createvendor.component.html',
  styleUrls: ['./createvendor.component.scss']
})
export class CreatevendorComponent implements OnInit {

  vendor: Vendor = new Vendor();
  submitted = false;
  addvendorForm: FormGroup;

  constructor(private fb: FormBuilder, private vendorService: VendorService, private toastr: ToastrService,
    private router: Router) { }

  vendors: Observable<Vendor[]>;
 
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addvendorForm = this.fb.group({
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
    this.submitted = true;
    this.vendor = new Vendor();
    this.vendor.vName = this.addvendorForm.controls.vName.value;
    this.vendor.vAddress = this.addvendorForm.controls.vAddress.value;
    this.vendor.vLocation = this.addvendorForm.controls.vLocation.value;
    this.vendor.vService = this.addvendorForm.controls.vService.value;
    this.vendor.vPincode = this.addvendorForm.controls.vPincode.value;
    this.vendor.cName = this.addvendorForm.controls.cName.value;
    this.vendor.cDepartment = this.addvendorForm.controls.cDepartment.value;
    this.vendor.cEmail = this.addvendorForm.controls.cEmail.value;
    this.vendor.cPhone = this.addvendorForm.controls.cPhone.value;

    this.vendorService.duplicateCheck(this.vendor.cPhone,this.vendor.cEmail).subscribe
    (data =>{
      console.log(data);
      if(data != null){
        // window.alert('duplicate value');
        this.toastr.error('E-mail or Phone No already exists','Data already exists');
        this.router.navigateByUrl('createvendor');
      }
    },error => this.save());
  


   

  }

  save() {
    console.log(this.vendor);
    this.vendorService.createVendor(this.vendor)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.employee = new Employee();
    this.gotoList();
    this.toastr.success('New Vendor Successfully Created', 'Asset Management System');

  }



  gotoList() {
    this.vendors = this.vendorService.getVendors();
    this.router.navigate(['/home/showvendor']);
  }

}
