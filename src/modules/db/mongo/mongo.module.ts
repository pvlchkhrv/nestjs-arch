import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema, Employer, EmployerSchema, Info, InfoSchema, User, UserSchema } from './schemas';
import { IDataServices } from '../../core/abstracts';
import { MongoService } from './mongo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Employer.name, schema: EmployerSchema },
      { name: Info.name, schema: InfoSchema },
      { name: Address.name, schema: AddressSchema },
    ]),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@pot.ewonr.mongodb.net/POT?retryWrites=true&w=majority`,
    ),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoService,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
