export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IFlight extends Document {
  pilot: string;
  airplane: string;
  desintationCity: string;
  flightDate: Date;
}
