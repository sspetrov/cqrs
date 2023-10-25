import { Module } from "@nestjs/common";
import { AuthSaga } from "./auth.saga";

@Module({
  providers: [AuthSaga]
})
export class SagasModule {}