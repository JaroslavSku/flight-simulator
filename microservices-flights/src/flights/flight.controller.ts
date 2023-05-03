import { FlightMSG } from '../common/contants';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}
  @MessagePattern(FlightMSG.CREATE)
  createFlight(@Payload() dto: FlightDTO) {
    return this.flightService.create(dto);
  }

  @MessagePattern(FlightMSG.FIND_ALL)
  getAll() {
    return this.flightService.findAll();
  }
}
