import { useCallback } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../store/user_interface'

export const useCloseModalOnKeyDownEsc = () => {
  const dispatch = useDispatch()

  const handleClickEsc = useCallback((event) => {
    if(event.key === 'Escape') dispatch(closeModal())
  }, [dispatch])

  return (
    useEffect(() => {
      window.addEventListener('keydown', handleClickEsc)
    return () => {
      window.removeEventListener('keydown', handleClickEsc)
    }
    }, [dispatch, handleClickEsc])
  )
}
