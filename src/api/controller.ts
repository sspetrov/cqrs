import { Body, Controller, Get } from "@nestjs/common";
import { SignUpDto } from "./sign-up.dto";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { SignUpCommand, SignUpCommandResponse } from "../auth";
import { UsersQuery } from "../users";

@Controller()
export class ApiController {
  readonly #commandBus: CommandBus;
  readonly #queryBus: QueryBus;

  constructor(commandBus: CommandBus, queryBus: QueryBus) {
    this.#commandBus = commandBus;
    this.#queryBus = queryBus;
  }

  @Get("sign-up")
  signUp(@Body() body: SignUpDto) {
    const { password, email } = body;

    return this.#commandBus.execute<SignUpCommand, SignUpCommandResponse>(
      new SignUpCommand(email, password)
    );
  }

  @Get('users')
  getUsers() {
    return this.#queryBus.execute(new UsersQuery())
  }
}
