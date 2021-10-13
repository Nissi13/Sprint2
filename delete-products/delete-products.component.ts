import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  product:Product=new Product();
  addressId:number;
  msg:string;
  flag:boolean=false;
  exmsg:string;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  delsearch():void{
    this.service.viewOneProduct(this.product.productId).subscribe((q)=>{
    if(q['msg']!=undefined){
    this.exmsg=q['msg'];
    this.flag=false;}
else
{ 
    this.product=q;}
  
  });
  if(this.product.productId!=undefined){
    this.flag=true;
  }
}
deladdr():void{
  this.service.deleteProduct(this.product.productId).subscribe((q)=>this.product=q);
  alert("address deleted"+this.addressId);
  this.flag=true;
}
}
