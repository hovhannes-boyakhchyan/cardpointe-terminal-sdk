///<reference path='./lib.d.ts' />
///<reference path='./shared.d.ts' />
///<reference path='./Payments.d.ts' />
///<reference path='./PaymentsResource.d.ts' />
///<reference path='./Terminals.d.ts' />
///<reference path='./TerminalsResource.d.ts' />

declare module '@orders.co/cardpointe-terminal-sdk' {
  export namespace CardpointeTerminal {}

  export class CardpointeTerminal {
    static CardpointeTerminal: typeof CardpointeTerminal;
    constructor();

    static CardpointeTerminalResource: CardpointeTerminal.CardpointeTerminalResource;

    // terminals: CardpointeTerminal.TerminalsResource;
    payments: CardpointeTerminal.PaymentsResource;
  }

  export default CardpointeTerminal;
}
