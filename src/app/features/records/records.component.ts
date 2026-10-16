import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../core/models/order.model';
import { OrdersService } from '../../core/services/orders.service';

@Component({ selector: 'app-records', standalone: false, templateUrl: './records.component.html', styleUrl: './records.component.css' })
export class RecordsComponent {
  orders: Order[] = [];
  message = '';
  messageType: 'success' | 'error' = 'success';
  form: FormGroup;
  constructor(private fb: FormBuilder, private ordersService: OrdersService) {
    this.form = this.fb.group({ customer: ['', [Validators.required]], address: ['', [Validators.required, Validators.minLength(10)]], amount: [null as number | null, [Validators.required, Validators.min(15)]], paymentMethod: ['', [Validators.required]] });
    this.refreshOrders();
  }
  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); this.show('Revisa los campos marcados antes de guardar.', 'error'); return; }
    const value = this.form.getRawValue();
    this.ordersService.add({ customer: value.customer!.trim(), address: value.address!.trim(), amount: Number(value.amount), paymentMethod: value.paymentMethod as 'Efectivo' | 'Tarjeta' });
    this.refreshOrders(); this.form.reset(); this.show('Pedido registrado correctamente.', 'success');
  }
  dispatch(id: number): void { this.ordersService.dispatch(id); this.refreshOrders(); this.show('Pedido despachado y retirado de la lista.', 'success'); }
  invalid(name: 'customer' | 'address' | 'amount' | 'paymentMethod'): boolean { const control = this.form.get(name); return !!control && control.invalid && (control.touched || control.dirty); }
  private refreshOrders(): void { this.orders = this.ordersService.getAll(); }
  private show(message: string, type: 'success' | 'error'): void { this.message = message; this.messageType = type; }
}
