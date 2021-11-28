import { User } from "./Authentication";

export interface PostModel{
    id: number;
    description: string;
    img_url: string;
    min_img_url: string;
    tags: string;
    author_id: number;
    created_at: Date;
    updated_at: Date;
    author: User;
    likes: number;
}

export interface PostState {
    posts: null | PostModel[],
}