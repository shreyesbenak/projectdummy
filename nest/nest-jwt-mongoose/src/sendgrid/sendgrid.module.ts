import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import sendgridConfig from "src/config/sendgrid.config";
import { sendgridProviders } from "./sendgrid.providers";
import { SendgridService } from "./sendgrid.service";

@Module({
  imports: [ConfigModule.forFeature(sendgridConfig)],
  providers: [...sendgridProviders, SendgridService],
  exports: [...sendgridProviders, SendgridService]
})
export class SendgridModule { }