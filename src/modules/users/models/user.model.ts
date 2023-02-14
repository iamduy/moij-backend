import { Collections } from '@/constant';
import { Document, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: Collections.USERS,
  },
);

export { UserSchema };

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}
