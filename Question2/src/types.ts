export interface User {
    id: number;
    name: string;
    postCount: number;
    avatar: string;
  }
  
  export interface Post {
    id: number;
    userId: number;
    userName: string;
    userAvatar: string;
    content: string;
    commentCount: number;
    timestamp: string;
    image: string;
  }