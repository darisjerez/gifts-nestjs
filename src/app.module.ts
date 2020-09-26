import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiftsModule } from './gifts/gifts.module';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [GiftsModule, GuestsModule, MongooseModule.forRoot('mongodb://localhost/giftlist')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
