import { User } from "../users-repository";

export interface UsersQueryResponse {
  readonly users: User[];
}