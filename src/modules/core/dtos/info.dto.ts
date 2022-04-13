import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateInfoDto {
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  picture?: string;

  @IsNotEmpty()
  addressId: any;
}

export class UpdateInfoDto extends PartialType(CreateInfoDto) {}
