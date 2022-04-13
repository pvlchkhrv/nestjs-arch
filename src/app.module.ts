import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDataServicesModule } from './modules/db/mongo/mongo.module';
import { EmployerModule } from './modules/employers';
import { InfoModule } from './modules/info';
import { AuthModule } from './modules/auth/auth.module';
import { AddressModule } from './modules/address';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@pot.ewonr.mongodb.net/POT?retryWrites=true&w=majority`,
    ),
    MongoDataServicesModule,
    EmployerModule,
    InfoModule,
    AuthModule,
    AddressModule,
  ],
})
export class AppModule {}
