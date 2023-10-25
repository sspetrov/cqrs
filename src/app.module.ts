import { Module } from "@nestjs/common";
import { ApiModule } from "./api";
import { AuthModule } from "./auth";
import { NotificationModule } from "./notification";
import { SagasModule } from "./sagas";
import { UsersRepositoryModule } from "./users-repository";
import { UsersModule } from "./users";

@Module({
  imports: [
    ApiModule,
    AuthModule,
    NotificationModule,
    SagasModule,
    UsersRepositoryModule,
    UsersModule
  ],
})
export class AppModule {}
