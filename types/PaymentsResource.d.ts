declare module '@orders.co/cardpointe-terminal-sdk' {
  namespace CardpointeTerminal {
    interface AuthCardParams {
      amount: number;
      merchantId: string;
      hsn: string;
      authorization: string;
      orderId?: string;
      readCardMethod?: ReadCardMethods;
    }

    interface ReadCardParams extends AuthCardParams {}

    interface CancelReadParams {
      merchantId: string;
      hsn: string;
      authorization: string;
    }

    type ReadCardMethods = 'manual' | 'system';

    interface CaptureParams {
      amount: number;
      token: string;
      merchantId: string;
      retRef: string;
      expiry?: string;
    }

    interface AuthTokenParams {
      merchantId: string;
      amount: number;
      token: string;
      capture?: boolean;
      orderId?: string;
    }

    class PaymentsResource {
      authCard(
        params: AuthCardParams,
      ): Promise<CardpointeTerminal.Response<CardpointeTerminal.AuthCard>>;

      readCard(
        params: ReadCardParams,
      ): Promise<CardpointeTerminal.Response<CardpointeTerminal.ReadCard>>;

      cancelRead(params: CancelReadParams): Promise<void>;

      authToken(
        params: AuthTokenParams,
      ): Promise<CardpointeTerminal.Response<CardpointeTerminal.AuthToken>>;

      capture(
        params: CaptureParams,
      ): Promise<CardpointeTerminal.Response<CardpointeTerminal.Capture>>;
    }
  }
}
