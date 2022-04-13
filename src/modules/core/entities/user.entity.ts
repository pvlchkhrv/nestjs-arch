import { Info } from './info.entity';
import { USER_ROLES } from '../../../constants/user-roles.enum';

export type ROLE_TYPE =
  | USER_ROLES.ADMIN
  | USER_ROLES.CONSUMER
  | USER_ROLES.EMPLOYER;

export class User {
  userName: string;
  password: string;
  role: ROLE_TYPE;
  info?: Info;
}
