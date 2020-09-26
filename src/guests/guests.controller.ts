import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { Guest } from './schemas/guest.schema';
import { CreateGuestDto } from './createGuest.dto';

@Controller('guests')
export class GuestsController {
    constructor(
        private GuestsService: GuestsService
    ){}

    @Get()
    async retriveAllGifts(): Promise<Guest[]>{
        return await this.GuestsService.getAllGifts();
    }
    @Post()
    @UsePipes(ValidationPipe)
    async createNewGuest(
        @Body() crateGuest: CreateGuestDto
    ):Promise<Guest>{
        return this.GuestsService.createNewGuest(crateGuest);
    }
}
