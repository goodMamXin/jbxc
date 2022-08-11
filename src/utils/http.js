
export class Http {
  static httpClient (url, data, method, header) {
    return new Promise((resolve, reject) => {
      if (header != null && header !== '') {
        header = Object.assign(header, { 'content-type': 'application/json' })
      }
      mpvue.request({
        url: url,
        data: data,
        method: method,
        header: header,
        success: res => {
          if (res.statusCode !== 200) {
            this.checkStatusCode(res.statusCode)
            reject(res.data)
          } else {
            resolve(res.data)
          }
        },
        fail: err => {
          this.checkStatusCode(err.statusCode)
          reject(err.data)
        }
      })
    })
  }

  static checkStatusCode (res) {
    let errMsg = '对不起，服务器发生错误，请检查提交的数据后再试一次!'
    switch (res) {
      case 302:
        errMsg = '登录超时,请重新登录'
        break
      case 404:
        errMsg = '无法找到资源'
        break
      case 500:
        errMsg = '对不起，服务器发生错误，请检查提交的数据后再试一次!'
        break
      default:
        errMsg = '网关超时，无法连接到服务器'
    }
    mpvue.showToast({ title: errMsg, icon: 'none', duration: 5000 })
  }

  static post (url, data, header) {
    return this.httpClient(url, data, 'POST', header)
  }

  static get (url, data, header) {
    return this.httpClient(url, data, 'GET', header)
  }
}
