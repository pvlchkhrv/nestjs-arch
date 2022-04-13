import { Injectable } from '@nestjs/common';
import { IDataServices } from '../core/abstracts';
import { Employer } from '../core/entities';
import { EmployerFactoryService } from './employer-factory.service';
import { CreateEmployerDto } from '../core/dtos/employer.dto';
import { AddressFactoryService, AddressService } from '../address';
import { InfoFactoryService, InfoService } from '../info';

@Injectable()
export class EmployerService {
  constructor(
    private dataServices: IDataServices,
    private employerFactory: EmployerFactoryService,
    private addressFactoryService: AddressFactoryService,
    private addressService: AddressService,
    private infoFactoryService: InfoFactoryService,
    private infoService: InfoService,
  ) {}

  getAllEmployers(): Promise<Employer[]> {
    return this.dataServices.employers.getAll();
  }

  getEmployerById(id: string): any {
    return this.dataServices.employers.getById(id);
  }

  async createEmployer(
    createEmployerDto: CreateEmployerDto,
  ): Promise<Employer> {
    const employer = this.employerFactory.createNewEmployer(createEmployerDto);
    const createdAddress = this.addressService.createAddress()
    try {
      const createdEmployer = await this.dataServices.employers.create(
        employer,
      );
      console.log(employer);

      return createdEmployer;
    } catch (error) {
      throw error;
    }
  }

  updateEmployer(bookId: string, book: Employer): Promise<Employer> {
    return this.dataServices.employers.update(bookId, book);
  }
}
