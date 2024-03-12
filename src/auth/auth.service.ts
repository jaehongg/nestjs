// auth.service.ts

import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { username } });

    if (user && user.password === password) {
      // 비밀번호를 사용하지 않으므로 password 변수를 제거합니다.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user; // rest 문법
      return result;
    }

    return null;
  }

  async signupUser(username: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { username } });

    console.log(user);
    if (user) {
      throw new HttpException('duplicate user', 401);
    } else {
      const newUser = await this.usersRepository.create({
        username,
        password,
      });
      return this.usersRepository.save(newUser);
    }
  }
}
