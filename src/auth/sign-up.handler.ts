import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { SignUpCommand } from "./sign-up.command";
import { UsersRepository } from "../users-repository";
import { UserModel } from "./user.model";
import { SignUpCommandResponse } from "./sign-up.response";

@CommandHandler(SignUpCommand)
export class SignUpCommandHandler
  implements ICommandHandler<SignUpCommand, SignUpCommandResponse>
{
  readonly #usersRepository: UsersRepository;
  readonly #publisher: EventPublisher;

  constructor(usersRepository: UsersRepository, publisher: EventPublisher) {
    this.#usersRepository = usersRepository;
    this.#publisher = publisher;
  }

  async execute(command: SignUpCommand): Promise<SignUpCommandResponse> {
    const UserCtor = this.#publisher.mergeClassContext(UserModel);
    const user = new UserCtor(await this.#usersRepository.createUser(command));

    user.signedUp();

    return { access: "access.token.impl", refresh: "refresh.token.impl" };
  }
}
