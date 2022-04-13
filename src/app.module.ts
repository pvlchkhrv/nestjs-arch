import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDataServicesModule } from './modules/db/mongo/mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@pot.ewonr.mongodb.net/POT?retryWrites=true&w=majority`,
    ),
    MongoDataServicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
