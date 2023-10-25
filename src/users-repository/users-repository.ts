import { User } from "./user";

export interface CreateUserRequest extends Pick<User, "email" | "password"> {}

export abstract class UsersRepository {
  abstract createUser(request: CreateUserRequest): Promise<User>;

  abstract getUsers(): Promise<User[]>;
}
