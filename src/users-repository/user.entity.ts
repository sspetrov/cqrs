import { User } from "./user";

type Input = Pick<User, "email" | "password">;

export class UserEntity implements User {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;

  constructor({ email, password }: Input) {
    this.email = email;
    this.password = password;
    this.username = email.split("@")[0];
    this.createdAt = new Date();
  }
}
