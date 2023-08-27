// Account
export interface Account {
  'type'?: string
  'username'?: string
}
// AccountToken
export interface AccountToken {
  'token': string
}
// AccountTokenNamed
export interface AccountTokenNamed {
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
  'name'?: string
}