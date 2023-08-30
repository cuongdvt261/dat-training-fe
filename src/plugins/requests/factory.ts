import repositories from '@/plugins/requests/repositories'

export const ReponsitoryFactory = {
  get: (resource: string) => repositories[resource],
}
