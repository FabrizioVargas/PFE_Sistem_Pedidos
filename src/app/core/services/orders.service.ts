import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;
  getAll(): Order[] { return [...this.orders]; }
  add(order: Omit<Order, 'id'>): void { this.orders = [{ ...order, id: this.nextId++ }, ...this.orders]; }
  dispatch(id: number): void { this.orders = this.orders.filter((order) => order.id !== id); }
}
