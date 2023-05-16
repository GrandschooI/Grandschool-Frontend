import React from 'react'

import cn from 'classnames'
import ReactPlayer from 'react-player/youtube'

import { getFontSize } from '../../../../../Redux/selectors/styleSelector'
import { useAppSelector } from '../../../../../utils/Hooks/useAppSelector'

import s from './Project.module.scss'

const Project = () => {
  const fontSize = useAppSelector(getFontSize)

  return (
    <div className={cn(s.projectBody, s[fontSize])}>
      <h3 className={s.title}>O Grand School</h3>

      <p>
        Program szkoleniowy GrandSchool to wysokiej jakości system szkoleniowy dla seniorów. Program
        jest systemem nauczania seniorów podstaw obsługi komputera i Internetu.
      </p>

      <div className={s.movie}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=S_zMbLa_nAE"
          controls={true}
          loop={true}
          width={'100%'}
          height={'485px'}
        />
      </div>

      <p>
        Kurs GrandSchool ma na celu wyposażenie słuchaczy w umiejętności korzystania z nowoczesnej
        technologii internetowej. technologie cyfrowe, jak z nich korzystać w życiu codziennym oraz
        jak posługiwać się komputerem osobistym podczas wyszukiwania informacji, komunikowania się w
        Internecie, wysyłania e-maili i wykorzystywanie komputerów osobistych do wyszukiwania
        informacji, komunikowania się w Internecie, wysyłania e-maili oraz rozwijania umiejętności
        korzystania z multimedialnych funkcji komputera. rozwijanie umiejętności korzystania z
        możliwości multimedialnych oferowanych przez sieć oraz różne serwisy rządowe i samorządowe
        usługi komunalne.
      </p>

      <p>
        Szkolenie składa się z 14 rozdziałów i zawiera materiały szkoleniowe począwszy od
        podstawowych umiejętności obsługi komputera - systemu operacyjnego Windows, programu Word,
        Internetu - aż po samodzielne zamawianie certyfikatów i dokumentów. Osobna sesja poświęcona
        była bezpieczeństwu w sieci.
      </p>

      <p>
        Portal GrandSchool jest otwarty, aby pomóc uczniom, nauczycielom i organizatorom procesu
        uczenia się.
      </p>

      <p>
        to ogólnodostępna elektroniczna wersja podręcznika GrandSchool, którą można pobrać
        Internetowe ABC jest dostępne tutaj w domenie publicznej i może być pobrane i wydrukowane do
        użytku w dedykowanych klasach lub w domu.
      </p>
    </div>
  )
}

export default Project
