import request from '@/service/request'
export function signin(email: string, password: string) {
  return request({
    url: '/sign-in/',
    method: 'post',
    data: { email, password },
  })
}
