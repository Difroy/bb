import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/Admin';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService
{
  admin?:Admin;
  APIURL:string = 'http://localhost:8080/bb/api/admin/login'
  constructor(private http:HttpClient)
  {



  }
login(admin:Admin):void

{

this
.http
.post<any>(this.APIURL, admin)
.subscribe(() =>this.admin = admin, console.log('ok'));

}

}
