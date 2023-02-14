import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto) {
    const user = await this.userService.create(userDto);

    return this.createToken(user);
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findByLogin(loginUserDto);

    return this.createToken(user);
  }

  private createToken({ email }) {
    const accessToken = this.jwtService.sign({ email });
    return {
      accessToken,
    };
  }

  async validateUser(email: string) {
    const user = await this.userService.findByEmail(email);
    if (!user)
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);

    return user;
  }
}
