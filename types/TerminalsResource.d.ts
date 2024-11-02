declare module '@orders.co/cardpointe-terminal-sdk' {
  namespace CardpointeTerminal {
    interface TerminalCreateParams {
      name: number;
      description: string;
      hsn: string;
      authorization: string;
    }

    interface TerminalListParams {
      hsn?: number;
    }

    class TerminalsResource {
      create(
        params?: TerminalCreateParams,
        options?: RequestOptions,
      ): Promise<CardpointeTerminal.Response<CardpointeTerminal.Terminal>>;

      list(
        params?: TerminalListParams,
        options?: RequestOptions,
      ): Promise<CardpointeTerminal.Response<CardpointeTerminal.Terminal[]>>;
    }
  }
}
