    export interface signUpData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface signInData {
    email: string;
    password: string;
}

export interface passwordResetData{
    password: string;
    password_confirmation: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

export interface AuthState {
    user: User | null;
    authenticated: boolean;
    token: string | null;
}