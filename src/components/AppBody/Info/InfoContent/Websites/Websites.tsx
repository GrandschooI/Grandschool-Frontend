import React, {useEffect} from 'react'
import s from './Websites.module.scss'
import WebsitesTopic from './WebsitesTopic';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../../../utils/Hooks/useAppSelector';
import {getWebsites} from '../../../../../Redux/selectors/infoSelector';
import {getWebsitesThunkCreator} from '../../../../../Redux/reducers/infoReducer';

const Websites = () => {

  const dispatch = useDispatch()
  const websitesData = useAppSelector(getWebsites)
  let location = useLocation().pathname.split('/').pop() as string
  useEffect(() => {
    dispatch(getWebsitesThunkCreator(location))
  }, [location])

  return (
    <ul className={s.websitesList}>
      {websitesData.map((el: any) => <WebsitesTopic websitesData={el} key={el.id}/>)}
    </ul>
  )
}

export default Websites
