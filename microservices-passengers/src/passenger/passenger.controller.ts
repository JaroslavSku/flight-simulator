import { passengerDto } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/contants';

@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}
  @MessagePattern(UserMSG.CREATE)
  async createPassenger(@Payload() dto: passengerDto) {
    return this.passengerService.create(dto);
  }

  @MessagePattern(UserMSG.FIND_ALL)
  async getAllPassengers() {
    return this.passengerService.findAll();
  }

  // @Get(':id')
  // async getById(@Param('id') id: string) {
  //   return this.passengerService.findById(id);
  // }
}
