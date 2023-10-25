import { Injectable } from "@nestjs/common/decorators";
import { ICommand, Saga, ofType } from "@nestjs/cqrs";
import { Observable, map } from "rxjs";
import { SignedUpEvent } from "../auth";
import { WelcomeCommand } from "../notification";

@Injectable()
export class AuthSaga {
  @Saga()
  signedUp = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(SignedUpEvent),
      map((event) => new WelcomeCommand(event.email))
    );
  };
}
