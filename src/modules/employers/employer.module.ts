import { Module } from '@nestjs/common';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { EmployerFactoryService } from './employer-factory.service';
import { MongoDataServicesModule } from '../db/mongo/mongo.module';
import { AddressModule } from '../address';
import { InfoModule } from '../info';

@Module({
  imports: [MongoDataServicesModule, AddressModule, InfoModule],
  controllers: [EmployerController],
  providers: [EmployerService, EmployerFactoryService],
  exports: [EmployerService, EmployerFactoryService],
})
export class EmployerModule {}
