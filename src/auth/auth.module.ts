import { Module } from "@nestjs/common";
import { SignUpCommandHandler } from "./sign-up.handler";
import { UsersRepositoryModule } from "../users-repository";
import { CqrsModule } from "@nestjs/cqrs";

@Module({ imports: [UsersRepositoryModule, CqrsModule], providers: [SignUpCommandHandler] })
export class AuthModule {}
