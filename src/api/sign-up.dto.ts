import { Expose } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class SignUpDto {
  @IsEmail()
  readonly email!: string;
  @IsString()
  readonly password!: string;
}