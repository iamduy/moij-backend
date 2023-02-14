import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compareSync, hash } from 'bcrypt';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    return this.userRepository.getByCondition({});
  }

  async getUserById(id: string) {
    const user = this.userRepository.findById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }

  async create(user: CreateUserDto) {
    user.password = await hash(user.password, 10);
    const userInDB = await this.userRepository.findByCondition({
      email: user.email,
    });
    if (userInDB)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    return await this.userRepository.create(user);
  }

  async findByLogin({ email, password }: LoginUserDto) {
    const user = await this.userRepository.findByCondition({ email });

    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    if (!compareSync(password, user.password)) {
      throw new HttpException('login failure', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByCondition({ email });
  }
}
