import { User } from './user.entity';
import { Info } from './info.entity';

export class Employer {
  name: string;
  countryCode: string;
  info: Info;
  readonly userAccounts: User[];
}
