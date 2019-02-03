export interface TicketOrderModel {
  id: string;
  vezeteknev: string;
  keresztnev: string;
  email: string;
  telefonszam: string;
  jegy: number;
  datum?: string;
}
