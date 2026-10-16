# Reto: Sistema de Registro y Despacho de Pedidos

Aplicación en Angular para registrar órdenes de compra y retirar de la lista los pedidos despachados.

## Requisitos

- Node.js y npm

## Iniciar

```bash
npm install
ng serve
```

Abre la dirección local que muestra Angular CLI. También puedes iniciar el servidor con `npm start`. Para generar una versión de producción, ejecuta `npm run build`.

## Reglas del formulario

- Cliente obligatorio.
- Dirección de entrega obligatoria, con al menos 10 caracteres.
- Monto mínimo de $15.00.
- Método de pago obligatorio: efectivo o tarjeta.
- Los pedidos se almacenan en memoria; al cerrar o recargar la aplicación, se borran.

## Organización del código

- `src/app/core`: modelo `Order` y servicio en memoria de pedidos.
- `src/app/features/records`: módulo y pantalla de registro, listado y despacho.
- `src/app/shared/components`: componentes reutilizables, como los mensajes de estado.
- `public`: archivos públicos servidos por Angular.

La aplicación usa `NgModule` y formularios reactivos. No tiene API, backend, autenticación ni librerías de interfaz externas.
