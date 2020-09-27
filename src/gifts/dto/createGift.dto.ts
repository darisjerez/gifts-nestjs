import { IsString } from "class-validator";

export class CreatGiftDto {
    name: string;

    quantity: number;

    owner: string;

    taken: boolean;

}