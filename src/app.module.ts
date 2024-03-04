import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RankModule } from './movies/rank.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.SCHEMA_NAME,
      synchronize: true,
      autoLoadEntities: true,
      // logging: true,
    }),
    RankModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
