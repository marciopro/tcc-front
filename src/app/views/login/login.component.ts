import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateuserService } from '../createuser/createuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password: string = '';
    
  constructor(private login: CreateuserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void {

    this.login.login(this.email, this.password).subscribe((data: any) => {
      this.login.showMessage('operação executada com sucesso');

      // AQUI GUARDA NO NAVEGADOR OS DADOS DO USUARIO
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('token', data.token);
      
      this.router.navigate(['/products']);
    })

  }

}
