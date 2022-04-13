import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerFactoryService } from './employer-factory.service';
import {
  CreateEmployerDto,
  CreateEmployerResponseDto,
  UpdateEmployerDto,
} from '../core/dtos/employer.dto';

@Controller('employers')
export class EmployerController {
  constructor(
    private employerService: EmployerService,
    private employerFactoryService: EmployerFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.employerService.getAllEmployers();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.employerService.getEmployerById(id);
  }

  @Post()
  async createEmployer(@Body() createEmployerDto: CreateEmployerDto) {
    const createdEmployerResponse = new CreateEmployerResponseDto();
    try {
      const createdEmployer = await this.employerService.createEmployer(
        createEmployerDto,
      );
      createdEmployerResponse.success = true;
      createdEmployerResponse.createdEmployer = createdEmployer;
    } catch (error) {
      // report and log error
      console.log(error);
      createdEmployerResponse.success = false;
    }

    return createdEmployerResponse;
  }

  @Put(':id')
  updateEmployer(
    @Param('id') employerId: string,
    @Body() updateEmployerDto: UpdateEmployerDto,
  ) {
    const employer =
      this.employerFactoryService.updateEmployer(updateEmployerDto);
    return this.employerService.updateEmployer(employerId, employer);
  }
}
