import { USER } from './../common/models/models';
import { UserDTO } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) {}
  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async createUser(dto: UserDTO) {
    const hashedPassword = await this.hashPassword(dto.password);
    console.log(hashedPassword, dto);
    const userModel = new this.model({ ...dto, password: hashedPassword });
    return await userModel.save();
  }
}
