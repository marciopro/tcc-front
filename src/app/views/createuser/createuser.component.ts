import { Component, OnInit } from '@angular/core';
//import { CreateUser } from './../createuser.service';
import { Router } from '@angular/router';
import { CreateuserService } from './createuser.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  name: '';
  email: '';
  password: null;
  confirmPassword: null;

  constructor(private createUser: CreateuserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUsers(): void {

    this.createUser.create(this.name, this.email, this.password, this.confirmPassword).subscribe(() => {
      this.createUser.showMessage('operação executada com sucesso');
      this.router.navigate(['/']);
    })

  }
  cancel(): void {
    this.router.navigate(['/login']);
  }

}
