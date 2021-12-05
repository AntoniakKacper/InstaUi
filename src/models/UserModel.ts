export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    isFollowed: boolean;
    posts_count: number;
    followers_count: number;
    followed_count: number;
    comments_count: number;
}

export interface UserState{
    user: null | User;
}