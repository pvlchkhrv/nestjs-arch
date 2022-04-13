import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { MongoDataServicesModule } from '../db/mongo/mongo.module';
import { InfoFactoryService } from './info-factory.service';

@Module({
  imports: [MongoDataServicesModule],
  providers: [InfoService, InfoFactoryService],
  exports: [InfoService, InfoFactoryService],
})
export class InfoModule {}
