import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { IdName } from './commonUtilits/CommonBaseEntity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [PaymentModule, ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    // entities: [payment],
    synchronize: true,
  }), UsersModule, IdName],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
