import { FlightMSG } from '../common/contants';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';
import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('api/v1/flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}
  @MessagePattern(FlightMSG.CREATE)
  createFlight(@Body() dto: FlightDTO) {
    console.log('receiving message', dto);
    return this.flightService.create(dto);
  }

  @MessagePattern(FlightMSG.FIND_ALL)
  getAll() {
    return this.flightService.findAll();
  }
}
