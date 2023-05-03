import { IPassenger } from './../common/interfaces/user.interface';
import { passengerDto } from './dto/passenger.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PASSENGER } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>,
  ) {}
  async create(dto: passengerDto) {
    const passanger = new this.model({
      ...dto,
    });
    return await passanger.save();
  }
  async findAll(): Promise<IPassenger[]> {
    return await this.model.find();
  }

  async findById(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, dto: passengerDto) {
    return await this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  async deleteById(id: string) {
    await this.model.findByIdAndDelete(id);
    return 'DELETED';
  }
}
