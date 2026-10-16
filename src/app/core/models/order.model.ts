export interface Order {
  id: number;
  customer: string;
  address: string;
  amount: number;
  paymentMethod: 'Efectivo' | 'Tarjeta';
}
