import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
usersAddForm123: FormGroup;
users=[];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.usersAddForm123 = this.fb.group({
      name: ['',[Validators.required, Validators.maxLength(6)]],
      phone: ['',[Validators.pattern('[0-9]{11}'), Validators.required]],
      password: ['',[Validators.maxLength(11), Validators.required]],
      email: ['',[Validators.required, Validators.email]],
    })
  }

  get email(){
    return this.usersAddForm123.get('email');
  }
  get phone(){
    return this.usersAddForm123.get('phone');
  }
  get password(){
  return this.usersAddForm123.get('password');
}
  get name(){
  return this.usersAddForm123.get('name');
}
  add()
  {
    this.users.push(this.usersAddForm123.value);
    console.log(this.users);
  }



}
