import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }
    
  logar(){

    if(this.form.invalid){
      return;
    }else{
      console.log(this.form.value)
    }
  }
}
