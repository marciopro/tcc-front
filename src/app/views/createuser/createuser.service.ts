import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  apiUrl = "http://localhost:3333/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top'
    })
  }
  
  create(name, email, password, confirmPassoword) {
    return this.http.post(`${this.apiUrl}user`, { 'name': name, 'email': email, 'password': password,  'confirmPassword': confirmPassoword})
  }

  login(email, password): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, {'email': email, 'password': password})
      .pipe(map((data: any) => {
          return {
            nome: data.result[0].name,
            id: data.result[0].id,
            token: data.token
          }
      }))
  }
  
}
