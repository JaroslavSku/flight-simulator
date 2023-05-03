import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FlightsMSG } from 'src/common/contants';
import { IFlights } from 'src/common/interfaces/flight.interface';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { FlightsDTO } from './dto/flights.dto';

@Controller('api/v2/flights')
export class FlightsController {
  constructor(private readonly proxy: ClientProxySuperFlights) {}
  _clientProxyFlights = this.proxy.clientProxyFlights();

  @Post()
  createFlight(@Body() flightsDto: FlightsDTO): Observable<IFlights> {
    console.log('sending request', flightsDto);
    return this._clientProxyFlights.send(FlightsMSG.CREATE, flightsDto);
  }

  @Get()
  getAllFligts(): Observable<IFlights[]> {
    return this._clientProxyFlights.send(FlightsMSG.FIND_ALL, '');
  }
}
