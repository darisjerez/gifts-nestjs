import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Gift extends Document {
    @Prop()
    name: string;

    @Prop()
    quantity: number;

    @Prop()
    taken: boolean;
    
    @Prop()
    owner: string;

    @Prop()
    category: string;
}


export const GiftSchema = SchemaFactory.createForClass(Gift);