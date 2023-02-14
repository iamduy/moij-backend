import { BaseRepository } from '@/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './models/user.model';

@Injectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {
    super(userModel);
  }
}
