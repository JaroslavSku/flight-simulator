import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { Controller } from '@nestjs/common';
import { Payload, MessagePattern } from '@nestjs/microservices';
import { UserMSG } from 'src/common/contants';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMSG.CREATE)
  createUser(@Payload() dto: UserDTO) {
    return this.userService.createUser(dto);
  }
}
