import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { ProductService } from '../../components/product/product.service'
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  public product: any = []
  produto = ''
  searchTxt = ''

  constructor(private router: Router, private produtosrc: ProductService) { }

  dataProdutos = []
  displayedColumns: string[] = ['nome', 'endereco', 'email', 'telefone' , 'tipo' , 'descricao'];
  storage = localStorage;

  ngOnInit(): void {
    this.produtosrc.list().subscribe(res => {
      res.forEach(element => {
        this.dataProdutos.push(element)
      });
  })
  }
  navigateToProductCreate() : void{
    this.router.navigate(['/products/create']);
  }

  search(){
    this.produtosrc.search(this.searchTxt).subscribe(res => {
      this.dataProdutos = res;
   })
  }

 // getProduto(){
  //  this.produtosrc.getProduto(this.produto).subscribe(res => {
   //      console.log(res);
    //     this.product = res;
     //  })
     //}

  

}
