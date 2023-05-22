import { Component } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  
  employeeId:any;
  register=new FormGroup<any>({
    employeeId: new FormControl('', [Validators.required])

  })
 login(item:any){
    console.log(item);
  
  }

  get(){
    return this.login
  }
}
