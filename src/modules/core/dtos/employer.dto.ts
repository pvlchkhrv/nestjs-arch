import { IsNotEmpty, IsString } from 'class-validator';
import { Employer, Info } from '../entities';
import { PartialType } from '@nestjs/mapped-types';

export class CreateEmployerDto {
  @IsString()
  name: string;

  @IsString()
  countryCode: string;

  @IsNotEmpty()
  infoInfo: Info;
}

export class UpdateEmployerDto extends PartialType(CreateEmployerDto) {}

export class CreateEmployerResponseDto {
  success: boolean;

  createdEmployer: Employer;
}
