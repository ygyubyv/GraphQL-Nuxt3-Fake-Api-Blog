export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface Comment {
  id: string;
  name: string;
  body: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  user: User;
  comments: {
    meta: {
      totalCount: number;
    };
  };
}

export interface ResponseData {
  posts: {
    data: Post[];
  };
}
