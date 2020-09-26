import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GiftsService } from './gifts.service';
import { Gift } from './schemas/gift.schema';
import { AddOwner } from './dto/newOwner.dto';
import { CreatGiftDto } from './dto/createGift.dto';

@Controller('gifts')
export class GiftsController {
    constructor(
        private giftService: GiftsService
    ){}

    @Get()
    async getAllGifts(): Promise<Gift[]>{
        return this.giftService.getAllGifts();
    }
    @Post('/:id')
    @UsePipes(ValidationPipe)
    async addOwnerOnGift(
        @Body() newOwner: AddOwner,
        @Param('id') id: string 
    ): Promise<any>{
        return this.giftService.addGiftOwner(newOwner, id);
    }

    @Post()
    async createNewGift(
        @Body() createNewGift: CreatGiftDto
    ):Promise<any>{
        return this.giftService.createNewGift(createNewGift);
    }
}
