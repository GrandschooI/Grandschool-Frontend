import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector