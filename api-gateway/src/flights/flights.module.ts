import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { FlightsController } from './flights.controller';

@Module({
  imports: [ProxyModule],
  controllers: [FlightsController],
})
export class FlightsModule {}
