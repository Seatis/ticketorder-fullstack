import {TicketOrderModel} from './ticketorder.model';

export interface GetResponse{
  status: string;
  error?: string;
  data?: TicketOrderModel[];
}
