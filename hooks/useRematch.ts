import { Dispatch } from '../redux/store'
import { useDispatch } from 'react-redux'

const useRematchDispatch = () => {
  const dispatch: Dispatch = useDispatch()

  return dispatch
}

export default useRematchDispatch
