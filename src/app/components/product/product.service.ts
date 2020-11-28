import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductCrudComponent } from '../../views/product-crud/product-crud.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl = "http://localhost:3333/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top'
    })
  }

  create(nome, endereco, telefone, email, tipo, descricao) {
    return this.http.post(`${this.apiUrl}product`, { 'nome': nome, 'endereco': endereco, 'telefone': telefone, 'email': email, 'tipo': tipo, 'descricao': descricao, 'user_id': this.getUserId() })
  }

  list(){
    return this.http.get<any[]>(`${this.apiUrl}products`)
  }

  getUserId() {
    const data = JSON.parse(localStorage.getItem('data'));

    return data.id;
  }
 // getProduto(produto){
   // return this.http.post(`${this.apiUrl}product`}, {produto: this.produto})
   //}

  public search(searchTxt: string) {
    return this.http.get<any[]>(`${this.apiUrl}searchProducts`, { params: { search: searchTxt }});
  }
}


