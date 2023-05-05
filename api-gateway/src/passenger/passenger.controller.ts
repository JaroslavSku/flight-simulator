import { Body, Controller, Post, Get } from '@nestjs/common';
import { PassengerMSG } from 'src/common/contants';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { PassengerDTO } from './dto/passenger.dto';

@Controller('api/v2/passenger')
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  _clientProxyPassengers = this.clientProxy.clientProxyPassengers();
  @Post()
  createPassenger(@Body() passengerDTO: PassengerDTO) {
    return this._clientProxyPassengers.send(PassengerMSG.CREATE, passengerDTO);
  }

  @Get()
  getAllPassengers() {
    return this._clientProxyPassengers.send(PassengerMSG.FIND_ALL, '');
  }
}
