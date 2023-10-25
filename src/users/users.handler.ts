import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UsersQuery } from "./users.query";
import { UsersQueryResponse } from "./users.response";
import { UsersRepository } from "../users-repository";

@QueryHandler(UsersQuery)
export class UsersHandler
  implements IQueryHandler<UsersQuery, UsersQueryResponse>
{
  readonly #usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.#usersRepository = usersRepository;
  }

  async execute(query: UsersQuery): Promise<UsersQueryResponse> {
    return { users: await this.#usersRepository.getUsers() };
  }
}
