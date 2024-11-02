declare module '@orders.co/cardpointe-terminal-sdk' {
  namespace CardpointeTerminal {
    export interface RequestOptions {}

    export class CardpointeTerminalResource {}

    export type Response<T> = T & {
      lastResponse: {
        headers: { [key: string]: string };
        requestId: string;
        statusCode: number;
      };
    };
  }
}
