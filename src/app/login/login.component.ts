import { Component } from '@angular/core';
import { Admin } from '../../model/Admin';

@Component
({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{


admin:Admin = { email:'', password:''}


}
