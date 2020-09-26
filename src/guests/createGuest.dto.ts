import { IsString } from "class-validator";

export class CreateGuestDto {
    @IsString()
    name: string;

    gifts:Array<string>
}