import store, {AppStateType} from "../../redux-store";
import {getCourseData} from "../courseSelector";
import {courseType} from "../../reducers/courseReducer";

let rootState: AppStateType;
let startCourseData: Array<courseType>

beforeEach(() => {
    rootState = store.getState()
    startCourseData = [
        {
            itemTitle: 'Sprzęt komputerowy',
            itemLink: '/course/instruments',
            topics: [
                {topicTitle: 'Test Title 1', topicLink: '/course/instruments/1'},
                {topicTitle: 'Test Title 2', topicLink: '/course/instruments/2'},
                {topicTitle: 'Test Title 3', topicLink: '/course/instruments/3'},
                {topicTitle: 'Test Title 4', topicLink: '/course/instruments/4'},
                {topicTitle: 'Test Title 5', topicLink: '/course/instruments/5'}
            ]
        },
        {
            itemTitle: 'Podstawy internetu',
            itemLink: '/course/internet',
            topics: [
                {topicTitle: 'Test Title 1', topicLink: '/course/internet/1'},
                {topicTitle: 'Test Title 2', topicLink: '/course/internet/2'},
                {topicTitle: 'Test Title 3', topicLink: '/course/internet/3'},
                {topicTitle: 'Test Title 4', topicLink: '/course/internet/4'},
                {topicTitle: 'Test Title 5', topicLink: '/course/internet/5'}
            ]
        }
    ]
})


it('get courses data', () => {
    const courseData = getCourseData(rootState);

    expect(courseData).toEqual(startCourseData);
    expect(courseData.length).toBe(2);
    expect(courseData).not.toBe(undefined);
    expect(courseData.map(el => el.itemLink)[0]).toBe('/course/instruments');
    expect(courseData.map(el => el.itemLink)[1]).toBe('/course/internet');
})