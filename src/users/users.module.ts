import { Module } from "@nestjs/common";
import { UsersRepositoryModule } from "../users-repository";
import { UsersHandler } from "./users.handler";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
  imports: [UsersRepositoryModule, CqrsModule],
  providers: [UsersHandler]
})
export class UsersModule {}