import { UserMSG } from './../common/contants';
import { Controller, Post, Body } from '@nestjs/common';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';

@Controller('api/v2/user')
export class UserController {
  // I add rabbit MQ as service instead
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  createUser(@Body() userDTO: UserDTO) {
    return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
  }
}
