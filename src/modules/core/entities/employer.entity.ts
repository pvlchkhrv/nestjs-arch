import { User } from './user.entity';
import { Info } from './info.entity';
import { Schema } from 'mongoose';

export class Employer {
  name: string;
  countryCode: string;
  info: Info;
  userAccounts: User[];
}
