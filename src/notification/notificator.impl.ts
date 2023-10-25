import { Logger } from "@nestjs/common";
import { Notificator } from "./notificator";

export class NotificatorImpl extends Notificator {
  readonly #logger = new Logger("Notificator");

  notifyWelcome(email: string): void {
    this.#logger.log(`Welcome ${email}!`);
  }
}
