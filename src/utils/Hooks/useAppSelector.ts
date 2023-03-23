import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppStateType } from '../../Redux/redux-toolkit-store'

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
