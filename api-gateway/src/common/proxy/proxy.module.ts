import { ClientProxySuperFlights } from './client-proxy';
import { Module } from '@nestjs/common';

@Module({
  providers: [ClientProxySuperFlights],
  exports: [ClientProxySuperFlights],
})
export class ProxyModule {}
