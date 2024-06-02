import { useContext } from 'react'
import { AuthContext } from '../provirders/AuthProvirder';

const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
