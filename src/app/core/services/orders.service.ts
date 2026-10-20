import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;
  getAll(): Order[] { return [...this.orders]; }
  add(order: Omit<Order, 'id' | 'orderCode'>): Order {
    const id = this.nextId++;
    const created: Order = { ...order, id, orderCode: `PED-${String(id).padStart(5, '0')}` };
    this.orders = [created, ...this.orders];
    return created;
  }
  dispatch(id: number): void { this.orders = this.orders.filter((order) => order.id !== id); }
}
