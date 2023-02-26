import {InitialStateType} from "../infoSlice";

let state: InitialStateType

beforeEach(() => {
    // @ts-ignore
    state = {
        aboutUs: [
            {
                itemLink: '/about-us/project',
                itemTitle: 'About project'
            },
            {
                itemLink: '/about-us/news',
                itemTitle: 'News'
            },
            {
                itemLink: '/about-us/reviews',
                itemTitle: 'Reviews'
            }
        ],
        infoPageAsideMenu: [
            {
                itemLink: '/info/websites',
                itemTitle: 'Websites',
                topics: []
            }
        ],
        websites: []
    }
})

test('Set websites', () => {
    // @ts-ignore
    const newState = infoReducer(state, InfoActions.setWebsites(
        [{
            id: 1,
            name: "Mediateka oferowana przez Telewizję Polską i dostępna za pośrednictwem platformy VOD",
            category: "Rozrywka w sieci dla seniorów – internetowe biblioteki multimedialne",
            link: "https://vod.tvp.pl",
            description: "Znajdą tam Państwo wyświetlane przez publiczne stacje: filmy, seriale i programy popularnonaukowe czy popularny niegdyś „Teatr Telewizji”. Można korzystać z dobrodziejstw tej platformy także na telewizorze, jeśli jest on połączony z Internetem i umożliwia wyświetlanie takich stron.",
            visible: true
        },
        {
            id: 2,
            name: "Najpopularniejsza platforma streamingowa – YouTube",
            category: "Rozrywka w sieci dla seniorów – internetowe biblioteki multimedialne",
            link: "https://www.youtube.com",
            description: "Na YouTubie każdy jego tej społeczności, jaką są odbiorcy YouTube’a.",
            visible: true
        }]
    ))

    expect(newState.websites[1].id).toBe(2)
    expect(newState.websites[1].name).toBe("Najpopularniejsza platforma streamingowa – YouTube")
    expect(newState.websites[1].category).toBe("Rozrywka w sieci dla seniorów – internetowe biblioteki multimedialne")
    expect(newState.websites[1].link).toBe('https://www.youtube.com')
    expect(newState.websites[1].description).toBe('Na YouTubie każdy jego tej społeczności, jaką są odbiorcy YouTube’a.')
    expect(newState.websites[1].visible).toBeTruthy()
})
//
// test('Set categories of websites', () => {
//     const newState = infoReducer(state, InfoActions.setWebsiteCategories(
//         [{
//             id: 1,
//             name: "Rozrywka w sieci dla seniorów – internetowe biblioteki multimedialne",
//             slug: "rozrywka-w-sieci-dla-seniorow-internetowe-biblioteki-multimedialne"
//         },
//         {
//             id: 2,
//             name: "Zdobywanie wiedzy i poszerzanie umiejętności za pośrednictwem Internetu",
//             slug: "zdobywanie-wiedzy-i-poszerzanie-umiejetnosci-za-posrednictwem-internetu"
//         },]
//     ))

//     expect(newState.infoPageAsideMenu[0].topics[1].id).toBe(2)
//     expect(newState.infoPageAsideMenu[0].topics[1].name).toBe("Zdobywanie wiedzy i poszerzanie umiejętności za pośrednictwem Internetu")
//     expect(newState.infoPageAsideMenu[0].topics[1].slug).toBe("zdobywanie-wiedzy-i-poszerzanie-umiejetnosci-za-posrednictwem-internetu")
// })

