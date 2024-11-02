# Orders.co Cardpointe Terminal Node.js Library

The Orders.co Cardpointe Terminal Node library written in server-side JavaScript.

## Documentation

## Requirements

Node 12 or higher.

## Installation

Install the package with:

```sh
npm install @orders.co/cardpointe-terminal-sdk

```

## Usage

<!-- prettier-ignore -->
Using ES modules and `async`/`await`:

```js
import CardpointeTerminal from '@orders.co/cardpointe-terminal-sdk';
const cardpointeTerminal = new CardpointeTerminal();

const payment = await cardpointeTerminal.payments.authCard({
  amount: 100,
  merchantId: "89000000000",
  hsn: "1100000000450006007",
  authorization: "EXAMPLEZCb8pPkXcZDVO0CIngLSFrBJgA/BYyUZIHT8zaj3MPg=",
  orderId: "24234878897"
});

console.log(payment);
```
