import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;
@Schema()
export class Address {
  @ApiProperty({ example: 'Asmati', description: `Consumer street` })
  @Prop({ required: true })
  street: string;

  @ApiProperty({ example: 'Tbilisi', description: `Consumer city` })
  @Prop({ required: true })
  city: string;

  @ApiProperty({ example: 'Georgia', description: `Consumer state` })
  @Prop({ required: true })
  state: string;

  @ApiProperty({ example: '220000', description: `Consumer zip code` })
  @Prop({ required: true })
  zip: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
