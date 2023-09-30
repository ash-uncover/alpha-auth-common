import { Service } from '@uncover/js-utils-fetch'
import {
  Account,
  AccountToken,
  AccountTokenRecover,
  AccountTokenRegister,
  Credentials,
  CredentialsUsername,
  User,
  UserInfo,
  UserToken,
} from './auth.model'

/**
 * POST /accounts/changemail
 * postAccountChangeMail
 */
export const postAccountChangeMail = async (service:any, payload:CredentialsUsername) => {
  const url = `/accounts/changemail`
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * PUT /accounts/changemail
 * putAccountChangeMail
 */
export const putAccountChangeMail = async (service:any, payload:AccountToken) => {
  const url = `/accounts/changemail`
  const options = {
    method: 'PUT',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * POST /accounts/recover
 * postAccountRecover
 */
export const postAccountRecover = async (service:any, payload:CredentialsUsername) => {
  const url = `/accounts/recover`
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * PUT /accounts/recover
 * putAccountRecover
 */
export const putAccountRecover = async (service:any, payload:AccountTokenRecover) => {
  const url = `/accounts/recover`
  const options = {
    method: 'PUT',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * POST /accounts/register
 * postAccountRegister
 */
export const postAccountRegister = async (service:any, payload:Credentials) => {
  const url = `/accounts/register`
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * PUT /accounts/register
 * putAccountRegister
 */
export const putAccountRegister = async (service:any, payload:AccountTokenRegister) => {
  const url = `/accounts/register`
  const options = {
    method: 'PUT',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * PATCH /accounts/{accountId}
 * patchAccount
 * @param {String} accountId - URL parameter
 */
export const patchAccount = async (service:any, accountId:String) => {
  const url = `/accounts/${accountId}`
  const options = {
    method: 'PATCH',
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * GET /accounts/{accountId}
 * getAccount
 * @param {String} accountId - URL parameter
 */
export const getAccount = async (service:any, accountId:String) => {
  const url = `/accounts/${accountId}`
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
export const postAuth = async (service:any, payload:Credentials) => {
  const url = `/auth`
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
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
 * PATCH /users/{userId}
 * patchUser
 * @param {String} userId - URL parameter
 */
export const patchUser = async (service:any, userId:String, payload:UserInfo) => {
  const url = `/users/${userId}`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(payload),
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * GET /users/{userId}
 * getUser
 * @param {String} userId - URL parameter
 */
export const getUser = async (service:any, userId:String) => {
  const url = `/users/${userId}`
  const options = {
    method: 'GET',
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

/**
 * POST /users/{userId}/avatar
 * postUserAvatar
 * @param {String} userId - URL parameter
 */
export const postUserAvatar = async (service:any, userId:String, payload:any) => {
  const url = `/users/${userId}/avatar`
  const options = {
    method: 'POST',
    body: payload,
  }
  const response = await service.fetch(url, options)
  const responseData = await response.json()
  return responseData
}

const AuthService = (config: any) => {
  const service = new Service(config, '/rest/api/v1', {
    'accounts': {
      'changemail': {
        post: (payload:CredentialsUsername) => postAccountChangeMail(service, payload),
        put: (payload:AccountToken) => putAccountChangeMail(service, payload),
      },
      'recover': {
        post: (payload:CredentialsUsername) => postAccountRecover(service, payload),
        put: (payload:AccountTokenRecover) => putAccountRecover(service, payload),
      },
      'register': {
        post: (payload:Credentials) => postAccountRegister(service, payload),
        put: (payload:AccountTokenRegister) => putAccountRegister(service, payload),
      },
      '$accountId': {
        patch: (accountId:String) => patchAccount(service, accountId),
        get: (accountId:String) => getAccount(service, accountId),
      },
    },
    'auth': {
      post: (payload:Credentials) => postAuth(service, payload),
      get: () => getAuth(service),
      delete: () => deleteAuth(service),
    },
    'users': {
      '$userId': {
        patch: (userId:String, payload:UserInfo) => patchUser(service, userId, payload),
        get: (userId:String) => getUser(service, userId),
        'avatar': {
          post: (userId:String, payload:any) => postUserAvatar(service, userId, payload),
        },
      },
    },
  })
  return service
}
export default AuthService
