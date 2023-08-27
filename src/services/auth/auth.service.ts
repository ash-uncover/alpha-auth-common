import { Service } from '@uncover/js-utils-fetch'
import {
    Account,
    AccountToken,
    Credentials,
    CredentialsUsername,
    User,
} from './auth.model'

/**
 * POST /account/changemail
 * postAccountChangeMail
 */
export const postAccountChangeMail = async (service:any, payload:CredentialsUsername) => {
    const url = `/account/changemail`
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * PUT /account/changemail
 * putAccountChangeMail
 */
export const putAccountChangeMail = async (service:any, payload:AccountToken) => {
    const url = `/account/changemail`
    const options = {
        method: 'PUT',
        body: JSON.stringify(payload),
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * POST /account/recover
 * postAccountRecover
 */
export const postAccountRecover = async (service:any, payload:CredentialsUsername) => {
    const url = `/account/recover`
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * PUT /account/recover
 * putAccountRecover
 */
export const putAccountRecover = async (service:any) => {
    const url = `/account/recover`
    const options = {
        method: 'PUT',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * POST /account/register
 * postAccountRegister
 */
export const postAccountRegister = async (service:any, payload:Credentials) => {
    const url = `/account/register`
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * PUT /account/register
 * putAccountRegister
 */
export const putAccountRegister = async (service:any) => {
    const url = `/account/register`
    const options = {
        method: 'PUT',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * GET /account/{accountId}
 * getAccount
 * @param {String} accountId - URL parameter
 */
export const getAccount = async (service:any, accountId:String) => {
    const url = `/account/${accountId}`
    const options = {
        method: 'GET',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * POST /auth
 * Create session
 */
export const postAuth = async (service:any) => {
    const url = `/auth`
    const options = {
        method: 'POST',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * GET /auth
 * Check auth
 */
export const getAuth = async (service:any) => {
    const url = `/auth`
    const options = {
        method: 'GET',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * DELETE /auth
 * Delete session
 */
export const deleteAuth = async (service:any) => {
    const url = `/auth`
    const options = {
        method: 'DELETE',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * GET /user/{userId}
 * getUser
 * @param {String} userId - URL parameter
 */
export const getUser = async (service:any, userId:String) => {
    const url = `/user/${userId}`
    const options = {
        method: 'GET',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

/**
 * POST /user/{userId}/avatar
 * postUserAvatar
 * @param {String} userId - URL parameter
 */
export const postUserAvatar = async (service:any, userId:String) => {
    const url = `/user/${userId}/avatar`
    const options = {
        method: 'POST',
    }
    const response = await service.fetch(url, options)
    const responseData = await response.json()
    return responseData
}

const AuthService = (config: any) => {
    const service = new Service(config, '/rest/api/v1/auth', {
        'account': {
            'changemail': {
                post: (payload:CredentialsUsername) => postAccountChangeMail(service, payload),
                put: (payload:AccountToken) => putAccountChangeMail(service, payload),
            },
            'recover': {
                post: (payload:CredentialsUsername) => postAccountRecover(service, payload),
                put: () => putAccountRecover(service),
            },
            'register': {
                post: (payload:Credentials) => postAccountRegister(service, payload),
                put: () => putAccountRegister(service),
            },
            '$accountId': {
                get: (accountId:String) => getAccount(service, accountId),
            },
        },
        'auth': {
            post: () => postAuth(service),
            get: () => getAuth(service),
            delete: () => deleteAuth(service),
        },
        'user': {
            '$userId': {
                get: (userId:String) => getUser(service, userId),
                'avatar': {
                    post: (userId:String) => postUserAvatar(service, userId),
                },
            },
        },
    })
    return service
}
export default AuthService
