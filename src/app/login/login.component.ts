import { Component } from '@angular/core';
import { Admin } from '../../model/Admin';
import { FormsModule } from '@angular/forms';

@Component
({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{


admin:Admin = { email:'', password:''}


}
