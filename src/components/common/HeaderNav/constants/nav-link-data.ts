import { nanoid } from '@reduxjs/toolkit'

export const navLinkData = [
  {
    id: nanoid(),
    to: '/about-us/project',
    nameLink: 'O nas',
  },
  {
    id: nanoid(),
    to: '/course',
    nameLink: 'Zajęcia',
  },
  /*{
    id: nanoid(),
    to: '/teachers',
    nameLink: 'Nauczycielowi',
  },*/
  {
    id: nanoid(),
    to: '/info',
    nameLink: 'Więcej',
  },
]
