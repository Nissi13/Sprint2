import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from '../Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-delete-orders',
  templateUrl: './delete-orders.component.html',
  styleUrls: ['./delete-orders.component.css']
})
export class DeleteOrdersComponent implements OnInit {
  order:Order=new Order();
  flag:boolean =false;
  constructor(private service:OrderService) { }

  ngOnInit(): void {
  }

  deleteProduct():void{
    this.service.deleteOrder(this.order.orderId).subscribe((q)=>this.order=q, (error: HttpErrorResponse )=>{
      if(error.status==404)
      alert(error.error);
    });
    }



}
