export interface Account {
    'type'?: string;
    'username'?: string;
}
export interface AccountToken {
    'token': string;
}
export interface AccountTokenRecover {
    'password'?: string;
    'secret': string;
    'token': string;
    'username': string;
}
export interface AccountTokenRegister {
    'secret': string;
    'token': string;
    'username': string;
}
export interface Credentials {
    'password': string;
    'username': string;
}
export interface CredentialsUsername {
    'username'?: string;
}
export interface User {
    'avatar'?: string;
    'description'?: string;
    'id'?: string;
    'name'?: string;
}
export interface UserInfo {
    'description'?: string;
    'name'?: string;
}
export interface UserToken {
    'token'?: string;
    'user'?: User;
}
