import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FlightModule } from './flights/flight.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    FlightModule,
  ],
})
export class AppModule {}
