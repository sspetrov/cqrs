import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { WelcomeCommand } from "./welcome.command";
import { Notificator } from "./notificator";

@CommandHandler(WelcomeCommand)
export class WelcomeCommandHandler
  implements ICommandHandler<WelcomeCommand, void>
{
  readonly #notificator: Notificator;

  constructor(notificator: Notificator) {
    this.#notificator = notificator;
  }

  async execute(command: WelcomeCommand) {
    const { email } = command;

    this.#notificator.notifyWelcome(email);
  }
}
