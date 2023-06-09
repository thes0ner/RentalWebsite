import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/entities/customer';
import { ListResponseModel } from 'src/app/models/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:7042/api/';

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + 'customers/getcustomerdetails';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
