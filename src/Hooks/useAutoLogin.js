import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { autoLogin } from '../store/user'

export const useAutoLogin = () => {
  const dispatch = useDispatch()

  return (useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch]))
}
