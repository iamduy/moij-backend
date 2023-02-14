import { config } from '@/constant';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller/auth.controller';
import { UserController } from './controller/user.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserSchema } from './models/user.model';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserRepository } from './user.repository';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: config().jwt.secret,
        signOptions: {
          expiresIn: config().jwt.accessTokenExpireTime,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, UserRepository, JwtStrategy],
})
export class UserModule {}
