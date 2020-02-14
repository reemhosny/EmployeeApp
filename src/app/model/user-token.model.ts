export interface IUserToken {
  token: string;
  token_type: string;
  expires_in: number;
  client_id: string;
  email: string;
  expiryDate: Date;
}
