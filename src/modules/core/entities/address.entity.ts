import { Schema } from 'mongoose';

export class Address {
  state: string;
  city: string;
  street: string;
  zip: string;
}
