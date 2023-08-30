import UsersRepository from '@/plugins/requests/repositories/users_repository'
import AuthRepository from '@/plugins/requests/repositories/auth_repository'

const repositories: { [key: string]: { [key: string]: Function } } = {
  users: UsersRepository,
  auth: AuthRepository,
}

export default repositories
