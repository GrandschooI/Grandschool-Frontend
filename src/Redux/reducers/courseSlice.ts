import { createSlice } from '@reduxjs/toolkit'

import { Nullable } from '../redux-toolkit-store'

const initialState = {
  courses: [
    {
      itemTitle: 'Sprzęt komputerowy',
      itemLink: '/course/instruments',
      topics: [
        { topicTitle: 'Test Title 1', topicLink: '/course/instruments/1' },
        { topicTitle: 'Test Title 2', topicLink: '/course/instruments/2' },
        { topicTitle: 'Test Title 3', topicLink: '/course/instruments/3' },
        { topicTitle: 'Test Title 4', topicLink: '/course/instruments/4' },
        { topicTitle: 'Test Title 5', topicLink: '/course/instruments/5' },
      ],
    },
    {
      itemTitle: 'Podstawy internetu',
      itemLink: '/course/internet',
      topics: [
        { topicTitle: 'Test Title 1', topicLink: '/course/internet/1' },
        { topicTitle: 'Test Title 2', topicLink: '/course/internet/2' },
        { topicTitle: 'Test Title 3', topicLink: '/course/internet/3' },
        { topicTitle: 'Test Title 4', topicLink: '/course/internet/4' },
        { topicTitle: 'Test Title 5', topicLink: '/course/internet/5' },
      ],
    },
  ] as Array<courseType>,
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
})

export default courseSlice.reducer
export const {} = courseSlice.actions

// Types

export type courseType = {
  itemTitle: Nullable<string>
  itemLink: string
  topics: Nullable<Array<topicType>>
}
export type topicType = {
  topicTitle: string
  topicLink: string
}
