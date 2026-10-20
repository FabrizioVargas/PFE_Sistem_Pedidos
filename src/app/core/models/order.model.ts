export interface Order {
  id: number;
  orderCode: string;
  customer: string;
  address: string;
  amount: number;
  paymentMethod: 'Efectivo' | 'Tarjeta';
}
