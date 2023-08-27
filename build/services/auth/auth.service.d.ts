import { AccountToken, Credentials, CredentialsUsername } from './auth.model';
/**
 * POST /account/changemail
 * postAccountChangeMail
 */
export declare const postAccountChangeMail: (service: any, payload: CredentialsUsername) => Promise<any>;
/**
 * PUT /account/changemail
 * putAccountChangeMail
 */
export declare const putAccountChangeMail: (service: any, payload: AccountToken) => Promise<any>;
/**
 * POST /account/recover
 * postAccountRecover
 */
export declare const postAccountRecover: (service: any, payload: CredentialsUsername) => Promise<any>;
/**
 * PUT /account/recover
 * putAccountRecover
 */
export declare const putAccountRecover: (service: any) => Promise<any>;
/**
 * POST /account/register
 * postAccountRegister
 */
export declare const postAccountRegister: (service: any, payload: Credentials) => Promise<any>;
/**
 * PUT /account/register
 * putAccountRegister
 */
export declare const putAccountRegister: (service: any) => Promise<any>;
/**
 * GET /account/{accountId}
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
 * GET /user/{userId}
 * getUser
 * @param {String} userId - URL parameter
 */
export declare const getUser: (service: any, userId: String) => Promise<any>;
/**
 * POST /user/{userId}/avatar
 * postUserAvatar
 * @param {String} userId - URL parameter
 */
export declare const postUserAvatar: (service: any, userId: String) => Promise<any>;
declare const AuthService: (config: any) => import("@uncover/js-utils-fetch/build/cjs/service").default;
export default AuthService;
