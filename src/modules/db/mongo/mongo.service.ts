import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
import { InjectModel } from '@nestjs/mongoose';
import {
  AddressDocument,
  EmployerDocument,
  InfoDocument,
  UserDocument,
  Address,
  Employer,
  Info,
  User,
} from './schemas';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic.repository';

@Injectable()
export class MongoService implements IDataServices, OnApplicationBootstrap {
  public users: MongoGenericRepository<User>;
  public employers: MongoGenericRepository<Employer>;
  public addresses: MongoGenericRepository<Address>;
  public infos: MongoGenericRepository<Info>;

  constructor(
    @InjectModel(Employer.name)
    private EmployerRepository: Model<EmployerDocument>,
    @InjectModel(User.name)
    private UserRepository: Model<UserDocument>,
    @InjectModel(Address.name)
    private AddressRepository: Model<AddressDocument>,
    @InjectModel(Info.name)
    private InfoRepository: Model<InfoDocument>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.employers = new MongoGenericRepository<Employer>(
      this.EmployerRepository,
      ['info'],
    );
    this.addresses = new MongoGenericRepository<Address>(
      this.AddressRepository,
    );
    this.infos = new MongoGenericRepository<Info>(this.InfoRepository, [
      'address',
    ]);
  }
}
