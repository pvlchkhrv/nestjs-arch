import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { User } from './user.schema';
import { Info } from './info.schema';

export type EmployerDocument = Employer & Document;

@Schema()
export class Employer {
  @ApiProperty({
    example: 'isSoft',
    description: 'Employer name',
    required: true,
  })
  @Prop()
  name: string;

  @ApiProperty({ example: 'BY', description: 'Country code', required: true })
  @Prop()
  countryCode: string;

  @ApiProperty({
    example: '[{...user1}, {...user2}]',
    description: 'Array of employer`s users',
  })
  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ],
  })
  userAccounts: User[];

  @ApiProperty({
    example: '[{...user1}, {...user2}]',
    description: 'Array of employer`s users',
  })
  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Info', required: true },
    ],
  })
  info: Info;
}

export const EmployerSchema = SchemaFactory.createForClass(Employer);
