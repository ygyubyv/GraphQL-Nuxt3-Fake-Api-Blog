import type { User, Comment } from "../posts/Types";

interface UserWithCompany extends User {
  company: {
    name: string;
  };
}

export interface CommentWithEmail extends Comment {
  email: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  user: UserWithCompany;
  comments: {
    data: CommentWithEmail[];
  };
}

export interface ResponseData {
  post: Post;
}
