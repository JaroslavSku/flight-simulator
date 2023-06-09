import { RabbitMQ } from './common/contants';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.PassengerQueue,
    },
  });
  await app.listen();
  console.log('microservice passengers listening');
}
bootstrap();
