import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {


  nome: '';
  endereco: '';
  telefone: null;
  email: '';
  tipo: '';
  descricao: '';

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProducts(): void {

    this.productService.create(this.nome, this.endereco, this.telefone, this.email, this.tipo, this.descricao).subscribe(() => {
      this.productService.showMessage('operação executada com sucesso');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
