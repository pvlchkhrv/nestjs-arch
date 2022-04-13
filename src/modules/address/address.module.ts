import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { MongoDataServicesModule } from '../db/mongo/mongo.module';
import { AddressFactoryService } from './address-factory.service';

@Module({
  imports: [MongoDataServicesModule],
  providers: [AddressService, AddressFactoryService],
  exports: [AddressService, AddressFactoryService],
})
export class AddressModule {}
