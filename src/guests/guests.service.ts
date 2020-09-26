import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guest } from './schemas/guest.schema';
import { CreateGuestDto } from './createGuest.dto';

@Injectable()
export class GuestsService {
    constructor(
        @InjectModel(Guest.name) private GuestModel: Model<Guest>
    ){}

    async getAllGifts(): Promise<Guest[]>{
        return await this.GuestModel.find().exec();
    }

    async createNewGuest(createGuestDto: CreateGuestDto):Promise<Guest>{
        const guest = new this.GuestModel(createGuestDto);
        return await guest.save();
    }
}
