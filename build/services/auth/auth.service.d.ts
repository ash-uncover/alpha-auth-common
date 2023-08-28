import { AccountToken, AccountTokenRecover, AccountTokenRegister, Credentials, CredentialsUsername } from './auth.model';
/**
 * POST /accounts/changemail
 * postAccountChangeMail
 */
export declare const postAccountChangeMail: (service: any, payload: CredentialsUsername) => Promise<any>;
/**
 * PUT /accounts/changemail
 * putAccountChangeMail
 */
export declare const putAccountChangeMail: (service: any, payload: AccountToken) => Promise<any>;
/**
 * POST /accounts/recover
 * postAccountRecover
 */
export declare const postAccountRecover: (service: any, payload: CredentialsUsername) => Promise<any>;
/**
 * PUT /accounts/recover
 * putAccountRecover
 */
export declare const putAccountRecover: (service: any, payload: AccountTokenRecover) => Promise<any>;
/**
 * POST /accounts/register
 * postAccountRegister
 */
export declare const postAccountRegister: (service: any, payload: Credentials) => Promise<any>;
/**
 * PUT /accounts/register
 * putAccountRegister
 */
export declare const putAccountRegister: (service: any, payload: AccountTokenRegister) => Promise<any>;
/**
 * GET /accounts/{accountId}
 * getAccount
 * @param {String} accountId - URL parameter
 */
export declare const getAccount: (service: any, accountId: String) => Promise<any>;
/**
 * POST /auth
 * Create session
 */
export declare const postAuth: (service: any) => Promise<any>;
/**
 * GET /auth
 * Check auth
 */
export declare const getAuth: (service: any) => Promise<any>;
/**
 * DELETE /auth
 * Delete session
 */
export declare const deleteAuth: (service: any) => Promise<any>;
/**
 * GET /users/{userId}
 * getUser
 * @param {String} userId - URL parameter
 */
export declare const getUser: (service: any, userId: String) => Promise<any>;
/**
 * POST /users/{userId}/avatar
 * postUserAvatar
 * @param {String} userId - URL parameter
 */
export declare const postUserAvatar: (service: any, userId: String) => Promise<any>;
declare const AuthService: (config: any) => import("@uncover/js-utils-fetch/build/cjs/service").default;
export default AuthService;
