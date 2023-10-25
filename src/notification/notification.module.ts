import { Module } from "@nestjs/common";
import { NotificatorImpl } from "./notificator.impl";
import { Notificator } from "./notificator";
import { WelcomeCommandHandler } from "./welcome.handler";

@Module({
  providers: [
    NotificatorImpl,
    { provide: Notificator, useExisting: NotificatorImpl },
    WelcomeCommandHandler,
  ],
})
export class NotificationModule {}
