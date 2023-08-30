import Reponsitory from '@/plugins/requests'
import urlJoin from 'url-join'

const resource = 'auth'

const AuthRepository = {
  login(username: string, password: string) {
    return Reponsitory.post(urlJoin(resource, 'login'), {
      username,
      password,
    })
  },
}

export default AuthRepository
