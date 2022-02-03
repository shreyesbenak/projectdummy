import { ConfigModule } from "@nestjs/config";

ConfigModule.forRoot({
    envFilePath: '.dev.env',
  });
  