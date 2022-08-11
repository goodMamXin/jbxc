import {Http} from './http'

const prefix = ''

export const LOGIN = prefix + 'https://www.gitbook.com/__amp/'

export class ApiService {
  static login () {
    return Http.get(LOGIN, {})
  }
}
