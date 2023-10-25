export class WelcomeCommand {
  readonly #email: string;

  constructor(email: string) {
    this.#email = email;
  }

  get email() {
    return this.#email
  }
}