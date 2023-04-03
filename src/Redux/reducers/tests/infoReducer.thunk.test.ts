import { InfoAPI, WebsiteItemType } from '../../../api/infoAPI'
import {
  getWebsitesCategoryThunkCreator,
  getWebsitesThunkCreator,
  initialInfoStateType,
} from '../infoSlice'

import { topicType } from 'Redux/reducers/courseSlice'
//import {getWebsitesCategoryThunkCreator, getWebsitesThunkCreator} from "../infoReducer";

jest.mock('../../../api/infoAPI')

const InfoAPIMock = InfoAPI as jest.Mocked<typeof InfoAPI>
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
})

const result: initialInfoStateType = {
  aboutUs: [
    {
      itemLink: '/about-us/project',
      itemTitle: 'About project',
    },
    {
      itemLink: '/about-us/news',
      itemTitle: 'News',
    },
    {
      itemLink: '/about-us/reviews',
      itemTitle: 'Reviews',
    },
  ],
  infoPageAsideMenu: [
    {
      itemLink: '/info/websites',
      itemTitle: 'Websites',
      topics: [] as Array<topicType>,
    },
  ],
  websites: [] as Array<WebsiteItemType>,
}

test('Get Websites', async () => {
  // @ts-ignore
  InfoAPIMock.getWebsites.mockResolvedValue(result)

  const thunk = getWebsitesThunkCreator('News')

  // @ts-ignore
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(1)
})

// todo test Get Websites Category : Expected number of calls: 1 -> Received number of calls: 0

test('Get Websites Category', async () => {
  // @ts-ignore
  InfoAPIMock.getWebsiteCategories.mockResolvedValue(result)

  const thunk = getWebsitesCategoryThunkCreator()
  const dispatchMock = jest.fn()
  const getStateMock = jest.fn()

  // @ts-ignore
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(1)
})
