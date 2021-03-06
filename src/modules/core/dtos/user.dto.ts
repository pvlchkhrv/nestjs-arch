import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  email?: string;

  @IsString()
  @IsNotEmpty()
  zip: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
