import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { LoginController } from './login/login.controller';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
