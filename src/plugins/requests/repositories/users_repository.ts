import Reponsitory from '@/plugins/requests'
import urlJoin from 'url-join'

const resource = 'users'

const UsersRepository = {
  get() {
    return Reponsitory.get(resource)
  },
  getUser(userId: number) {
    return Reponsitory.get(urlJoin(resource, userId.toString()))
  },
  getMe() {
    return Reponsitory.get(urlJoin(resource, 'me'))
  },
}

export default UsersRepository
