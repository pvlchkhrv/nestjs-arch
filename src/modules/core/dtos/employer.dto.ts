import { IsString, ValidateNested } from 'class-validator';
import { Info } from '../entities/info.entity';
import { PartialType } from '@nestjs/mapped-types';

export class CreateEmployerDto {
  @IsString()
  name: string;

  @IsString()
  countryCode: string;

  @ValidateNested()
  info: Info;
}

export class UpdateEmployerDto extends PartialType(CreateEmployerDto){}
