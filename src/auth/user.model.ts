import { AggregateRoot } from "@nestjs/cqrs";
import { User } from "../users-repository";
import { SignedUpEvent } from "./signed-up.event";

export class UserModel extends AggregateRoot {
  readonly #user: User;

  constructor(user: User) {
    super();
    this.#user = user;
    this.autoCommit = true;
  }

  signedUp() {
    this.apply(new SignedUpEvent(this.#user.email))
  }
}