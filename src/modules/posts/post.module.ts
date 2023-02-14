import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './models/post.model';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { PostService } from './post.service';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Post',
      schema: PostSchema
    }
  ])],
  controllers: [PostController],
  providers: [PostService, PostRepository]
})
export class PostModule { }
