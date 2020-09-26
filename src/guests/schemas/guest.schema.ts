import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Guest extends Document {
    @Prop()
    name: string;

    @Prop()
    gifts: Array<string>;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);