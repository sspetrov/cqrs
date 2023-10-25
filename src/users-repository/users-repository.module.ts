import { Module } from "@nestjs/common";
import { UsersRepository } from "./users-repository";
import { UsersRepositoryImpl } from "./users-repository.impl";

@Module({
  providers: [
    UsersRepositoryImpl,
    { provide: UsersRepository, useExisting: UsersRepositoryImpl },
  ],
  exports: [UsersRepository],
})
export class UsersRepositoryModule {}
