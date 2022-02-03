import { of, Observable } from 'rxjs';
import { CreatePostDto } from './create-post.dto';
import { UpdatePostDto } from './update-post.dto';
import { PostService } from './post.service';
import { BlogPost } from '../database/post.model';
import { CreateCommentDto } from './create-comment.dto';
import { Comment } from '../database/comment.model';

// To unite the method signature of the mocked PostServiceStub and PostService,
// use `Pick<T, key of T>` instead of writing an extra interface.
// see: https://dev.to/jonrimmer/typesafe-mocking-in-typescript-3b50
// also see: https://www.typescriptlang.org/docs/handbook/utility-types.html#picktk
export class PostServiceStub implements Pick<PostService, keyof PostService> {
  private posts: BlogPost[] = [
    {
      _id: '5ee49c3115a4e75254bb732e',
      title: 'Generate a NestJS project',
      content: 'content',
    } as BlogPost,
    {
      _id: '5ee49c3115a4e75254bb732f',
      title: 'Create CRUD RESTful APIs',
      content: 'content',
    } as BlogPost,
    {
      _id: '5ee49c3115a4e75254bb7330',
      title: 'Connect to MongoDB',
      content: 'content',
    } as BlogPost,
  ];

  private comments: Comment[] = [
    {
      post: { _id: '5ee49c3115a4e75254bb732e' },
      content: 'comment of post',
    } as Comment,
  ];

  findAll(): Observable<BlogPost[]> {
    return of(this.posts);
  }

  findById(id: string): Observable<BlogPost> {
    const { title, content } = this.posts[0];
    return of({ _id: id, title, content } as BlogPost);
  }

  save(data: CreatePostDto): Observable<BlogPost> {
    return of({ _id: this.posts[0]._id, ...data } as BlogPost);
  }

  update(id: string, data: UpdatePostDto): Observable<BlogPost> {
    return of({ _id: id, ...data } as BlogPost);
  }

  deleteById(id: string): Observable<BlogPost> {
    return of({ _id: id, title:'test title', content:'content' } as BlogPost);
  }

  deleteAll(): Observable<any> {
    throw new Error('Method not implemented.');
  }

  createCommentFor(
    postid: string,
    data: CreateCommentDto,
  ): Observable<Comment> {
    return of({ id: 'test', post: { _id: postid }, ...data } as Comment);
  }

  commentsOf(id: string): Observable<Comment[]> {
    return of(this.comments);
  }
}