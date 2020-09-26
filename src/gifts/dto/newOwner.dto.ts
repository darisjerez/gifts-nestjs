import { IsNotEmpty, IsString } from "class-validator";

export class AddOwner {
    @IsString()
    @IsNotEmpty()
    owner: string
}