import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategyService],
})
export class AppModule {}
