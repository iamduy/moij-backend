import { BaseRepository } from "@/base.repository";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPost } from "./models/post.model";


@Injectable()
export class PostRepository extends BaseRepository<IPost> {
  constructor(
    @InjectModel('Post')
    private readonly postModel: Model<IPost>
  ) {
    super(postModel);
  }
}