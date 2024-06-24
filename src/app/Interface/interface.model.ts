export interface LoginSuccess {
  token: string;
  __successmsg__: string;
}

export interface Customer {
  id:string;
  firstname : string;
  lastname :string;
  email:string;
  username : string;
}
