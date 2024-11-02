declare module '@orders.co/cardpointe-terminal-sdk' {
  namespace CardpointeTerminal {
    interface Metadata {
      [name: string]: string;
    }

    interface MetadataParam {
      [name: string]: string | number | null;
    }
  }
}
