import { Collections } from "@/constant";
import { Document, Schema } from "mongoose";

const PostSchema = new Schema({
  title: String,
  description: String,
  content: String
}, {
  timestamps: true,
  collection: Collections.POSTS
})

export { PostSchema };

export interface IPost extends Document {
  title: string;
  description: string;
  content: string;
}