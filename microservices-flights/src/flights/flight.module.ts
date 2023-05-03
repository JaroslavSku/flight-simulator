import { flightSchema } from './schema/flight.schema';
import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => {
          return flightSchema;
        },
      },
    ]),
  ],
  providers: [FlightService],
  controllers: [FlightController],
})
export class FlightModule {}
