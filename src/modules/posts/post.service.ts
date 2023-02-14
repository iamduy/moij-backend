import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) { }
  async getAll() {
    return this.postRepository.getByCondition({});
  }

  async getPostById(id: string) {
    const post = this.postRepository.findById(id)
    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    return post;
  }

  async createPost(post: CreatePostDto) {
    return await this.postRepository.create(post);
  }
}
