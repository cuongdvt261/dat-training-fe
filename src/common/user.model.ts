export default interface UserInfo {
  username: string
  email: string
  firstName: string
  lastName: string | null | undefined
  gender: string
  image: string | null | undefined
  token: string | null | undefined
}
