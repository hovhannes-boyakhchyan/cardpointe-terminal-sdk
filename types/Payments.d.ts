declare module '@orders.co/cardpointe-terminal-sdk' {
  namespace CardpointeTerminal {
    interface AuthCard {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * The amount, in cents, that was paid.
       */
      amount: number;

      /**
       * Native order identifier.
       */
      orderId: string;

      /**
       * The token generated for the payment card.
       */
      token: string;

      /**
       * The card's expiration date in the format MMYY.
       */
      expiry: string;

      /**
       * The retrieval reference number userd to look up and manage the transaction.
       */
      retRef: string;

      /**
       * The terminal details.
       */
      terminalDetails: CardpointeTerminal.Terminal;

      /**
       * This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: CardpointeTerminal.Metadata;
    }

    interface ReadCard {
      /**
       * The card's expiration date in the format MMYY.
       */
      expiry: number;

      /**
       * The cardholder's name on the card.
       * The name is not returned if the card or mobile wallet is read through NFC (contactless).
       */
      name?: string;

      /**
       * Specifies if the token is only valid for a single use.
       * Set to true if the card or mobile wallet is read through NFC (contactless).
       */
      singleUseToken?: boolean;

      /**
       * The tokenized card data returned by CardSecure.
       */
      token: string;

      /**
       * example:<base64-encoded, gzipped BMP>
       * base64-encoded, gzipped BMP of the signature image
       */
      signature: object;
    }

    type SetlStat =
      | 'Authorized'
      | 'Declined'
      | 'Queued for Capture'
      | 'Voided'
      | 'Zero Amount';

    interface Capture {
      /**
       * CardPointe merchant ID, required for all requests.
       */
      merchantId: string;

      /**
       * The orderId, copied from the authorization request.
       * The orderId is returned in the response when the request includes an orderId and "receipt":"y".
       * If no orderId was passed and "receipt":"json", "n", or omitted the orderId field is omitted from the response.
       */
      orderId: string;

      /**
       * Authorized or captured amount in decimal or in currency minor units (for example, USD Pennies or MXN centavos).
       */
      amount: number;

      /**
       * CardPointe retrieval reference number from authorization response. Required for subsequent capture, void, refund, and inquire requests.
       */
      retRef: string;

      /**
       * The current settlement status. The settlement status changes throughout the transaction lifecycle, from authorization to settlement. The following values can be returned in the capture response:
       * Note: See Settlement Status Response Values for a complete list of setlstat values.
       * Authorized - The authorization was approved, but the transaction has not yet been captured.
       * Declined - The authorization was declined; therefore, the transaction can not be captured.
       * Queued for Capture - The authorization was approved and captured but has not yet been sent for settlement.
       * Voided - The authorization was voided; therefore, the transaction cannot be captured.
       * Zero Amount - The authorization was a $0 auth for account validation, which cannot be captured.
       */
      setlStat: SetlStat;
    }

    type RespStat = 'A' | 'B' | 'C';

    interface AuthToken {
      /**
       * Authorized or captured amount in decimal or in currency minor units (for example, USD Pennies or MXN centavos).
       */
      amount: string;

      /**
       * The tokenized account number used to verify that the card type is eligible for surcharging.
       * Optional if postal is specified.
       */
      token: string;

      /**
       * CardPointe retrieval reference number from authorization response. Required for subsequent capture, void, refund, and inquire requests.
       */
      retRef: string;

      /**
       * The orderId, copied from the authorization request.
       * The orderId is returned in the response when the request includes an orderId and "receipt":"y".
       * If no orderId was passed and "receipt":"json", "n", or omitted the orderId field is omitted from the response.
       */
      orderId: string;

      /**
       * Text description of the response.
       */
      respText: string;

      /**
       * The card's expiration date in the format MMYY.
       */
      expiry: number;

      /**
       * Indicates the status of the request. Can be one of the following values:
       * A - Approved
       * B - Retry
       * C - Declined
       */
      respStat: RespStat;
    }
  }
}
