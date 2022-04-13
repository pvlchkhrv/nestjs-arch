import { Address } from './address.entity';

export class Info {
  phone: string;
  email: string;
  address: Address;
  firstName?: string;
  lastName?: string;
  picture?: string;
}
