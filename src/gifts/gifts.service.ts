import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gift } from './schemas/gift.schema';
import { CreatGiftDto } from './dto/createGift.dto';
import { AddOwner } from './dto/newOwner.dto';

@Injectable()
export class GiftsService {
    constructor(
        @InjectModel(Gift.name) private giftModel: Model<Gift>
    ){}

    async getAllGifts():Promise<Gift[]>{
        return await this.giftModel.find().exec();
    }
    async createNewGift(createGift: CreatGiftDto): Promise<any>{
        const giftCreated = new this.giftModel(createGift);
        return await giftCreated.save();
    }
    async findGiftById(id: string): Promise<Gift>{
        const foundGift = await this.giftModel.findById(id);
        if(!foundGift){
            throw new NotFoundException(`Gift with id: ${id} not found`);
        }

        return foundGift;
    }
    async addGiftOwner(newOwner: AddOwner, id: string): Promise<any>{
        const { owner } = newOwner;
        const gift = await this.findGiftById(id);
        if(gift.name !== ""){
            return { message: `${gift.name} ha sido tomado por ${gift.owner}!`, status: "Taken"};
        }
        gift.owner = owner;
        gift.taken = true;
        await gift.save();
        return { message: `${gift.name} elegido!`, status: "success"};
    }
}
