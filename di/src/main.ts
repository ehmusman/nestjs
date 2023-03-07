import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(3000, () => console.log("running on port = 3000"));
}
bootstrap();
