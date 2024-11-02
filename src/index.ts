import CardpointeTerminal from '@orders.co/cardpointe-terminal-sdk';
import { PaymentImplementation } from './implementation';

export default class CardpointeTerminalImplementation
  implements CardpointeTerminal
{
  public readonly payments: PaymentImplementation = new PaymentImplementation();
}
