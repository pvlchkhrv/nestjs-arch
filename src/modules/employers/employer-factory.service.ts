import { Injectable } from '@nestjs/common';
import {
  CreateEmployerDto,
  UpdateEmployerDto,
} from '../core/dtos/employer.dto';
import { Employer } from '../core/entities';

@Injectable()
export class EmployerFactoryService {
  createNewEmployer(createEmployerDto: CreateEmployerDto) {
    const newEmployer = new Employer();
    newEmployer.name = createEmployerDto.name;
    newEmployer.countryCode = createEmployerDto.countryCode;
    newEmployer.info = createEmployerDto.infoId;
    return newEmployer;
  }

  updateEmployer(updateEmployerDto: UpdateEmployerDto) {
    const newEmployer = new Employer();
    newEmployer.name = updateEmployerDto.name;
    newEmployer.countryCode = updateEmployerDto.countryCode;

    return newEmployer;
  }
}
