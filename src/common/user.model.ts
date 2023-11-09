export default interface UserInfo {
  username: string
  email: string
  firstName: string
  lastName: string | null | undefined
  gender: string
  image: string
  token: string | null | undefined
}
