import { FlightDTO } from './dto/flight.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FLIGHT } from 'src/common/models/models';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGHT.name) private readonly model: Model<FlightDTO>,
  ) {}
  async create(flightDto: FlightDTO) {
    const flight = new this.model({
      ...flightDto,
    });
    return await flight.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async update(id: string, flightDto: FlightDTO) {
    return await this.model.findByIdAndUpdate(id, flightDto, { new: true });
  }

  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
