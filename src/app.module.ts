import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiftsModule } from './gifts/gifts.module';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [GiftsModule, GuestsModule, MongooseModule.forRoot('mongo "mongodb+srv://cluster0.barty.mongodb.net/weddingGifts" --username admin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
