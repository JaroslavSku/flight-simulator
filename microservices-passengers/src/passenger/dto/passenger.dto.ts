import { IsEmail } from 'class-validator';
export class passengerDto {
  readonly name: string;
  @IsEmail()
  readonly email: string;
}
