import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) { }
  @Get()
  getAllPost() {
    return this.postService.getAll();
  }
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }
  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postService.createPost(post);
  }
}
