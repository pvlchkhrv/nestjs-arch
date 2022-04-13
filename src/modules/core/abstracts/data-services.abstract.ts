import { IGenericRepository } from './generic-repository.abstract';
import { Address, Employer, Info, User } from '../entities';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;

  abstract employers: IGenericRepository<Employer>;

  abstract infos: IGenericRepository<Info>;

  abstract addresses: IGenericRepository<Address>;
}
