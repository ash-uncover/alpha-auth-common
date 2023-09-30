// Account
export interface Account {
  'type'?: string
  'username'?: string
}
// AccountToken
export interface AccountToken {
  'token': string
}
// AccountTokenRecover
export interface AccountTokenRecover {
  'password'?: string
  'secret': string
  'token': string
  'username': string
}
// AccountTokenRegister
export interface AccountTokenRegister {
  'secret': string
  'token': string
  'username': string
}
// Credentials
export interface Credentials {
  'password': string
  'username': string
}
// CredentialsUsername
export interface CredentialsUsername {
  'username'?: string
}
// User
export interface User {
  'avatar'?: string
  'description'?: string
  'id'?: string
  'name'?: string
}
// UserInfo
export interface UserInfo {
  'description'?: string
  'name'?: string
}
// UserToken
export interface UserToken {
  'token'?: string
  'user'?: User
}