import axios from 'axios';
import CardpointeTerminal from '@orders.co/cardpointe-terminal-sdk';
import { Configs } from '../components/configs';

export class PaymentImplementation
  implements CardpointeTerminal.PaymentsResource
{
  async authCard(
    params: CardpointeTerminal.AuthCardParams,
  ): Promise<CardpointeTerminal.Response<CardpointeTerminal.AuthCard>> {
    return axios
      .post(`${Configs.GATEWAY_URL}/payment-terminal/auth-card`, params)
      .then((res) => res?.data)
      .catch((e) => {
        throw e.response?.data || e;
      });
  }

  async readCard(
    params: CardpointeTerminal.ReadCardParams,
  ): Promise<CardpointeTerminal.Response<CardpointeTerminal.ReadCard>> {
    return axios
      .post(`${Configs.GATEWAY_URL}/payment-terminal/read-card`, params)
      .then((res) => res?.data)
      .catch((e) => {
        throw e.response?.data || e;
      });
  }

  async cancelRead(params: CardpointeTerminal.CancelReadParams): Promise<void> {
    return axios
      .post(`${Configs.GATEWAY_URL}/payment-terminal/cancel-read`, params)
      .then((res) => res?.data)
      .catch((e) => {
        throw e.response?.data || e;
      });
  }

  async authToken(
    params: CardpointeTerminal.AuthTokenParams,
  ): Promise<CardpointeTerminal.Response<CardpointeTerminal.AuthToken>> {
    return axios
      .post(`${Configs.GATEWAY_URL}/cardpointe/authorize`, params)
      .then((res) => res?.data)
      .catch((e) => {
        throw e.response?.data || e;
      });
  }

  async capture(
    params: CardpointeTerminal.CaptureParams,
  ): Promise<CardpointeTerminal.Response<CardpointeTerminal.Capture>> {
    return axios
      .post(`${Configs.GATEWAY_URL}/cardpointe/capture`, params)
      .then((res) => res?.data)
      .catch((e) => {
        throw e.response?.data || e;
      });
  }
}
