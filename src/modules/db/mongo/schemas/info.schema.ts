import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Address } from './address.schema';

export type InfoDocument = Info & Document;

@Schema()
export class Info {
  @ApiPropertyOptional({ example: 'Bob', description: `Consumer first name` })
  @Prop()
  firstName?: string;

  @ApiPropertyOptional({ example: 'Marley', description: `Consumer last name` })
  @Prop()
  lastName?: string;

  @ApiProperty({
    example: '+375-11-111-11-11',
    description: `Consumer phone number`,
  })
  @Prop({ required: true })
  phone: string;

  @ApiProperty({ example: 'example@gmail.com', description: `Consumer email` })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: 'Asmati', description: `Consumer street` })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  })
  address: Address;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
