import React, {useEffect, useState} from 'react'
import s from './Websites.module.scss'
import WebsitesTopic from './WebsitesTopic';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../../../utils/Hooks/useAppSelector';
import {getWebsites} from '../../../../../Redux/selectors/infoSelector';
/*import {getWebsitesThunkCreator} from '../../../../../Redux/reducers/infoSlice'*/
import Preloader from "../../../../utils/Preloader/Preloader";

const Websites = () => {
  const dispatch = useDispatch()
  const websitesData = useAppSelector(getWebsites)
  const [loadedStatus, setLoadedStatus] = useState<boolean>(false)
  let location = useLocation().pathname.split('/').pop() as string
  useEffect(() => {
    setLoadedStatus(false)
    /*dispatch(getWebsitesThunkCreator(location))*/
  }, [location])
  useEffect(() => {
    setLoadedStatus(true)
  }, [websitesData])

  return (
    <ul className={s.websitesList}>
      {!loadedStatus && <Preloader/>}
      {websitesData.map((el: any) => <WebsitesTopic websitesData={el} key={el.id}/>)}
    </ul>
  )
}

export default Websites
