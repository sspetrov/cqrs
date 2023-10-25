import { Module } from "@nestjs/common";
import { ApiController } from "./controller";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
  imports: [CqrsModule],
  controllers: [ApiController]
})
export class ApiModule {}