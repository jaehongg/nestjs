import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() userData) {
    return this.authService.validateUser(userData.username, userData.password);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.authService.findAll();
  }

  @Post('signup')
  async signup(@Body() userData): Promise<User> {
    console.log(userData);
    return this.authService.signupUser(userData.username, userData.password);
  }
}
