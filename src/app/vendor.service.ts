import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient,private router:Router) { }

  getVendor(vId: number): Observable<any> {
    console.log("get one vendor");
    //return this.http.get('${this.baseUrl}/${adid}');
    return this.http.get(environment.apiUrl+'/vendorbyid/'+vId);
  }
  
  getVendors(): Observable<any>{
    console.log("get vendorlist");
  
    return this.http.get(environment.apiUrl+'/vendordetails');
  }
  
  createVendor(vendor: Vendor): Observable<Object> {
  
    console.log(vendor);
    return this.http.post(environment.apiUrl+'/insertdetails', vendor);
    
  }
  
  updateVendor(vId: number, vendor: Vendor): Observable<any> {
    console.log("updating : "+vId+vendor)
    return this.http.put(environment.apiUrl+'updatedetails/'+vId, vendor);
  }
  
  deleteVendor(vId: number, vendor: Vendor): Observable<any> {
    return this.http.put(environment.apiUrl+'/disablevendor/'+vId, vendor);
  }

  search(searchString:String):Observable<Vendor[]>
  {
    return this.http.get<Vendor[]>(environment.apiUrl+'/searchdetails/'+searchString);
  }

  duplicateCheck(cPhone : number , cEmail: string): any{
    return this.http.get<Vendor>(environment.apiUrl+'/duplicatecheck/'+cPhone+'/'+cEmail);
  }

}
