import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require("cookie-session")
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ["345432"]
    })
  )
  app.useGlobalPipes(new ValidationPipe(
    {
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('@nestjs/class-transformer'),
      whitelist: true
    }
  ));
  await app.listen(3000, () => console.log("Web server is running on port 3000"));
}
bootstrap();
