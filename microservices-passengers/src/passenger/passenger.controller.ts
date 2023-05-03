import { passengerDto } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from 'src/common/contants';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PassengerMSG.CREATE)
  createPassenger(@Payload() dto: passengerDto) {
    return this.passengerService.create(dto);
  }

  @MessagePattern(PassengerMSG.FIND_ALL)
  getAllPassengers() {
    return this.passengerService.findAll();
  }
}
