import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ROLE_TYPE } from '../../../core/entities';
import { Info } from './info.schema';
import mongoose from 'mongoose';
import { Employer } from './employer.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: ROLE_TYPE;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Info' })
  info?: Info;
}
export const UserSchema = SchemaFactory.createForClass(Employer);
