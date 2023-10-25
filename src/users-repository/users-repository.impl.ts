import { Injectable } from "@nestjs/common/decorators";
import { CreateUserRequest, UsersRepository } from "./users-repository";
import { User } from "./user";
import { UserEntity } from "./user.entity";

const users: User[] = [];

@Injectable()
export class UsersRepositoryImpl extends UsersRepository {
  async createUser(request: CreateUserRequest): Promise<User> {
    const user = new UserEntity(request);

    users.push(user);

    return user;
  }

  async getUsers(): Promise<User[]> {
    return users;
  }
}