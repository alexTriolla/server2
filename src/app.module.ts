import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'yourpassword',
      database: 'event',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EventModule,
  ],
})
export class AppModule {}
