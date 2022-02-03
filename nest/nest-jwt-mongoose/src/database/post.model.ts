import { Connection, Document, Model, Schema, SchemaTypes } from 'mongoose';
import { User } from './user.model';

interface BlogPost extends Document {
  readonly title: string;
  readonly content: string;
  readonly createdBy?: Partial<User>;
  readonly updatedBy?: Partial<User>;
}

type PostModel = Model<BlogPost>;

const PostSchema = new Schema<BlogPost>(
  {
    title: SchemaTypes.String,
    content: SchemaTypes.String,
    createdBy: { type: SchemaTypes.ObjectId, ref: 'User', required: false },
    updatedBy: { type: SchemaTypes.ObjectId, ref: 'User', required: false },
  },
  { timestamps: true },
);

const createPostModel: (conn: Connection) => PostModel = (conn: Connection) =>
  conn.model<BlogPost>('Post', PostSchema, 'posts');

export { BlogPost, PostModel, createPostModel };