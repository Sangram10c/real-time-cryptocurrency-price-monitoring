import mongoose, { Schema, Document } from "mongoose";

export interface IAlert extends Document {
  userId: string;
  crypto: string;
  priceTarget: number;
  isAbove: boolean;
}

const AlertSchema = new Schema<IAlert>({
  userId: { type: String, required: true },
  crypto: { type: String, required: true },
  priceTarget: { type: Number, required: true },
  isAbove: { type: Boolean, required: true },
});

export default mongoose.model<IAlert>("Alert", AlertSchema);
