declare module '@orders.co/cardpointe-terminal-sdk' {
  namespace CardpointeTerminal {
    interface Terminal {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * The terminal's name.
       */
      name: number;

      /**
       * The terminal's description.
       */
      description: string;

      /**
       * The hardware service number for the terminal.
       */
      hsn: string;

      /**
       * The terminal API authorization key.
       */
      authorization: string;

      /**
       * This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: CardpointeTerminal.Metadata;
    }
  }
}
