import React from 'react'
import CountUp from 'react-countup'
import cn from 'classnames'
import s from './Counter.module.scss'
import {useAppSelector} from '../../../../utils/Hooks/useAppSelector';
import {getFontSize, getImgAvailability, getThemeStyle} from '../../../../Redux/selectors/styleSelector';


const Counter = () => {
  const images = useAppSelector(getImgAvailability)
  const themeStyle = useAppSelector(getThemeStyle)
  const fontSize = useAppSelector(getFontSize)
  return (
    <section className={cn(s[themeStyle ? themeStyle : ''], s.counterBlock, s[fontSize ? fontSize : ''])}>
      <div className={cn('container', s.counterContainer)}>
        <div>
          <h3>Наш проект в цифрах</h3>
          <p>Здесь пару слов о том, что ты можешь стать частью нашего проекта и выйти на путь единомышлия
            простым движением руки - нажав на кнопку “Задонатить”</p>
          <a href="https://zrzutka.pl/znu2ed" rel="noreferrer" target="_blank">Wesprzyj nas</a>
        </div>
        <ul className={cn(s.counterWrap, 'container')}>
          <li className={s.counterItem}>
            <CountUp start={0} end={100000} className={s.counterNumber}/><span className={s.description}>zł</span>
            <h4>WYMAGANA KWOTA</h4>
            {images && <svg className={s.counterIcon} width="105" height="105" viewBox="0 0 105 105"
                            xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M63.4981 89.8558H53.402V83.7981H55.4212C55.9789 83.7981 56.4308 83.3462 56.4308 82.7885V75.7211H61.4789C62.0366 75.7211 62.4885 75.2692 62.4885 74.7115V66.6346C62.4885 66.0769 62.0366 65.625 61.4789 65.625H58.45V58.5577C58.45 58 57.9981 57.5481 57.4404 57.5481H52.3924V51.4904H56.4308C56.9885 51.4904 57.4404 51.0383 57.4404 50.4807V43.4134H58.45C59.0078 43.4134 59.4597 42.9613 59.4597 42.4038V34.3269C59.4597 33.7694 59.0078 33.3173 58.45 33.3173H53.402V26.25C53.402 25.6925 52.9501 25.2404 52.3924 25.2404H6.95966C6.40215 25.2404 5.95005 25.6925 5.95005 26.25V34.3269C5.95005 34.8844 6.40215 35.3365 6.95966 35.3365H12.0077V41.3942H10.9981C10.4406 41.3942 9.98851 41.8463 9.98851 42.4038V49.4711H5.95005C5.39254 49.4711 4.94043 49.9232 4.94043 50.4807V58.5577C4.94043 59.1154 5.39254 59.5673 5.95005 59.5673H10.9981V66.6346C10.9981 67.1923 11.4502 67.6442 12.0077 67.6442H15.0366V73.7019H9.98851C9.431 73.7019 8.97889 74.1538 8.97889 74.7115V81.7788H6.95966C6.40215 81.7788 5.95005 82.2307 5.95005 82.7885V90.8654C5.95005 91.4231 6.40215 91.875 6.95966 91.875H17.0558V98.9423C17.0558 99.5 17.5079 99.9519 18.0654 99.9519H63.4981C64.0558 99.9519 64.5077 99.5 64.5077 98.9423V90.8654C64.5077 90.3077 64.0558 89.8558 63.4981 89.8558ZM51.3827 89.8558H48.3539V83.7981H51.3827V89.8558ZM43.3058 89.8558V83.7981H46.3347V89.8558H43.3058ZM38.2577 89.8558V83.7981H41.2866V89.8558H38.2577ZM33.2097 89.8558V83.7981H36.2385V89.8558H33.2097ZM28.1616 89.8558V83.7981H31.1904V89.8558H28.1616ZM23.1135 89.8558V83.7981H26.1424V89.8558H23.1135ZM18.0654 89.8558V83.7981H21.0943V89.8558H18.0654ZM16.0462 83.7981V89.8558H13.0174V83.7981H16.0462ZM47.3443 73.7019V67.6442H50.3731V73.7019H47.3443ZM42.2962 73.7019V67.6442H45.325V73.7019H42.2962ZM37.2481 73.7019V67.6442H40.277V73.7019H37.2481ZM32.2 73.7019V67.6442H35.2289V73.7019H32.2ZM27.152 73.7019V67.6442H30.1808V73.7019H27.152ZM22.1039 73.7019V67.6442H25.1327V73.7019H22.1039ZM52.3924 67.6442H55.4212V73.7019H52.3924V67.6442ZM60.4693 73.7019H57.4404V67.6442H60.4693V73.7019ZM50.3731 57.5481H47.3443V51.4904H50.3731V57.5481ZM42.2962 57.5481V51.4904H45.325V57.5481H42.2962ZM37.2481 57.5481V51.4904H40.277V57.5481H37.2481ZM32.2 57.5481V51.4904H35.2289V57.5481H32.2ZM27.152 57.5481V51.4904H30.1808V57.5481H27.152ZM22.1039 57.5481V51.4904H25.1327V57.5481H22.1039ZM17.0558 57.5481V51.4904H20.0847V57.5481H17.0558ZM12.0077 57.5481V51.4904H15.0366V57.5481H12.0077ZM57.4404 41.3942C57.1747 41.3942 55.1755 41.3942 54.4116 41.3942V35.3365H57.4404V41.3942ZM49.3635 41.3942V35.3365H52.3924V41.3942H49.3635ZM44.3154 41.3942V35.3365H47.3443V41.3942H44.3154ZM39.2674 41.3942V35.3365H42.2962V41.3942H39.2674ZM34.2193 41.3942V35.3365H37.2481V41.3942H34.2193ZM29.1712 41.3942V35.3365H32.2V41.3942H29.1712ZM24.1231 41.3942V35.3365H27.152V41.3942H24.1231ZM19.075 41.3942V35.3365H22.1039V41.3942H19.075ZM7.96928 27.2596H51.3827V33.3173C49.8736 33.3173 10.1628 33.3173 7.96928 33.3173V27.2596ZM14.027 35.3365H17.0558V41.3942H14.027V35.3365ZM12.0077 43.4134H55.4212V49.4711C53.4771 49.4711 14.1883 49.4711 12.0077 49.4711V43.4134ZM6.95966 51.4904H9.98851V57.5481H6.95966V51.4904ZM13.0174 59.5673H56.4308V65.625C54.6896 65.625 14.5027 65.625 13.0174 65.625V59.5673ZM17.0558 67.6442H20.0847V73.7019H17.0558V67.6442ZM10.9981 75.7211H54.4116V81.7788C51.9249 81.7788 12.6599 81.7788 10.9981 81.7788V75.7211ZM7.96928 83.7981H10.9981V89.8558H7.96928V83.7981ZM62.4885 97.9327H19.075V91.875H62.4885V97.9327Z"/>
                <path
                    d="M97.5067 72.1871C99.084 71.0995 100.06 69.7101 100.06 67.3942C100.06 64.1945 97.4866 61.5916 94.3228 61.5916C93.7237 61.5916 93.1414 61.6622 92.5691 61.7969C92.7004 61.2392 92.7714 60.6562 92.7714 60.0404C92.7714 56.8766 90.1682 54.3027 86.9688 54.3027C84.6525 54.3027 83.2629 55.279 82.1761 56.8563C81.0888 55.2792 79.6991 54.3027 77.3833 54.3027C74.1836 54.3027 71.5806 56.8766 71.5806 60.0404C71.5806 60.6395 71.6513 61.2218 71.786 61.7941C71.2285 61.6628 70.6453 61.5918 70.0296 61.5918C66.8659 61.5918 64.292 64.1949 64.292 67.3944C64.292 69.7105 65.2683 71.0999 66.8455 72.1873C65.2685 73.2742 64.292 74.6636 64.292 76.9797C64.292 80.1794 66.8659 82.7824 70.0296 82.7824C70.6287 82.7824 71.2109 82.7117 71.7831 82.577C71.6519 83.1347 71.5808 83.7177 71.5808 84.3335C71.5808 87.4973 74.184 90.0712 77.3835 90.0712C79.6995 90.0712 81.0892 89.0947 82.1763 87.5177C83.2633 89.0949 84.6529 90.0712 86.969 90.0712C90.1687 90.0712 92.7716 87.4973 92.7716 84.3335C92.7716 83.7344 92.701 83.1521 92.5663 82.5798C93.124 82.7111 93.707 82.7822 94.3228 82.7822C97.4866 82.7822 100.06 80.179 100.06 76.9795C100.06 74.6634 99.0836 73.274 97.5067 72.1871ZM73.5994 60.0402C73.5994 57.9898 75.2966 56.3218 77.3829 56.3218C79.1808 56.3218 80.1266 57.0491 81.2753 59.3147C81.6491 60.0511 82.7031 60.0509 83.0765 59.3147C84.2248 57.0489 85.1704 56.3218 86.9684 56.3218C89.0546 56.3218 90.7518 57.9898 90.7518 60.0402C90.7518 64.0049 86.6013 66.5849 82.2008 70.7597C79.2432 67.6389 77.0489 64.5968 74.369 62.9061C73.8541 61.9693 73.5994 61.0296 73.5994 60.0402ZM70.0292 80.7631C67.9789 80.7631 66.3108 79.066 66.3108 76.9797C66.3108 75.182 67.0381 74.2362 69.3035 73.088C69.6428 72.916 69.8566 72.5681 69.8566 72.1877C69.8566 71.8072 69.6428 71.4591 69.3037 71.2871C67.0379 70.1379 66.3108 69.1921 66.3108 67.3944C66.3108 65.3081 67.9789 63.611 70.0292 63.611C73.9837 63.611 76.5435 67.7298 80.7485 72.1624C77.6264 75.1214 74.586 77.3135 72.8947 79.9938C71.9578 80.5087 71.0185 80.7631 70.0292 80.7631ZM90.7522 84.3335C90.7522 86.3839 89.055 88.0519 86.9688 88.0519C85.1708 88.0519 84.225 87.3246 83.0769 85.059C82.9049 84.7198 82.557 84.506 82.1765 84.506C82.1763 84.506 82.1763 84.506 82.1763 84.506C81.7959 84.506 81.448 84.7198 81.2757 85.059C80.127 87.3248 79.1812 88.0519 77.3833 88.0519C75.297 88.0519 73.5998 86.3839 73.5998 84.3335C73.5998 80.3785 77.7181 77.8203 82.1513 73.6147C85.1076 76.7332 87.3018 79.7761 89.9827 81.4678C90.4976 82.4046 90.7522 83.3441 90.7522 84.3335ZM94.3226 80.7631C90.3677 80.7631 87.8092 76.6451 83.6037 72.2123C86.7261 69.2519 89.7642 67.0633 91.4569 64.3803C92.3934 63.865 93.333 63.6106 94.3226 63.6106C96.3727 63.6106 98.0408 65.3077 98.0408 67.394C98.0408 69.1917 97.3135 70.1375 95.0479 71.2867C94.7087 71.4587 94.4951 71.8068 94.4951 72.1873C94.4951 72.5677 94.7091 72.9156 95.0481 73.0876C97.3137 74.236 98.0408 75.1816 98.0408 76.9793C98.0408 79.0658 96.3727 80.7631 94.3226 80.7631Z"/>
                <path
                    d="M86.7193 35.336C91.1729 35.336 94.7962 31.7127 94.7962 27.2591C94.7962 22.8054 91.1729 19.1821 86.7193 19.1821C82.2656 19.1821 78.6423 22.8054 78.6423 27.2591C78.6423 31.7127 82.2656 35.336 86.7193 35.336ZM86.7193 21.2014C90.0595 21.2014 92.777 23.9188 92.777 27.2591C92.777 30.5993 90.0595 33.3167 86.7193 33.3167C83.3791 33.3167 80.6616 30.5993 80.6616 27.2591C80.6616 23.9188 83.3791 21.2014 86.7193 21.2014Z"/>
                <path
                    d="M19.075 17.1632C22.4153 17.1632 25.1327 14.4458 25.1327 11.1055C25.1327 7.76533 22.4153 5.04785 19.075 5.04785C15.7348 5.04785 13.0173 7.76533 13.0173 11.1055C13.0173 14.4458 15.7348 17.1632 19.075 17.1632ZM19.075 7.06708C21.3018 7.06708 23.1135 8.87874 23.1135 11.1055C23.1135 13.3324 21.3018 15.144 19.075 15.144C16.8482 15.144 15.0366 13.3324 15.0366 11.1055C15.0366 8.87874 16.8482 7.06708 19.075 7.06708Z"/>
                <path
                    d="M69.051 51.4903C69.8874 51.4903 70.5655 50.8122 70.5655 49.9759C70.5655 49.1395 69.8874 48.4614 69.051 48.4614C68.2147 48.4614 67.5366 49.1395 67.5366 49.9759C67.5366 50.8122 68.2147 51.4903 69.051 51.4903Z"/>
                <path
                    d="M74.0991 11.1055C74.9355 11.1055 75.6136 10.4275 75.6136 9.59108C75.6136 8.75469 74.9355 8.07666 74.0991 8.07666C73.2627 8.07666 72.5847 8.75469 72.5847 9.59108C72.5847 10.4275 73.2627 11.1055 74.0991 11.1055Z"/>
                <path
                    d="M94.2913 48.461C95.1277 48.461 95.8057 47.7829 95.8057 46.9466C95.8057 46.1102 95.1277 45.4321 94.2913 45.4321C93.4549 45.4321 92.7769 46.1102 92.7769 46.9466C92.7769 47.7829 93.4549 48.461 94.2913 48.461Z"/>
                <path
                    d="M58.45 20.1924C59.2864 20.1924 59.9644 19.5144 59.9644 18.678C59.9644 17.8416 59.2864 17.1636 58.45 17.1636C57.6136 17.1636 56.9355 17.8416 56.9355 18.678C56.9355 19.5144 57.6136 20.1924 58.45 20.1924Z"/>
                <path
                    d="M33.7146 16.1539C34.551 16.1539 35.229 15.4758 35.229 14.6394C35.229 13.803 34.551 13.125 33.7146 13.125C32.8782 13.125 32.2002 13.803 32.2002 14.6394C32.2002 15.4758 32.8782 16.1539 33.7146 16.1539Z"/>
                <path
                    d="M9.4837 21.2017C10.3201 21.2017 10.9981 20.5237 10.9981 19.6873C10.9981 18.8509 10.3201 18.1729 9.4837 18.1729C8.64731 18.1729 7.96928 18.8509 7.96928 19.6873C7.96928 20.5237 8.64731 21.2017 9.4837 21.2017Z"/>
                <path
                    d="M72.0799 93.8942C72.9163 93.8942 73.5943 93.2162 73.5943 92.3798C73.5943 91.5434 72.9163 90.8654 72.0799 90.8654C71.2435 90.8654 70.5654 91.5434 70.5654 92.3798C70.5654 93.2162 71.2435 93.8942 72.0799 93.8942Z"/>
            </svg>
            }
          </li>
          <li className={s.counterItem}>
            <CountUp end={12} className={s.counterNumber}/><span className={s.description}>miesięcy</span>
            <h4>CZAS REALIZACJI</h4>
            {images && <svg className={s.counterIcon} width="130" height="130" viewBox="0 0 130 130" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="M119.67 48.6372C119.527 48.1694 119.117 47.8226 118.629 47.7614C118.475 47.7419 118.825 47.7549 112.617 47.7512C112.032 43.9713 108.756 41.0688 104.816 41.0688C102.031 41.0688 99.58 42.5197 98.1741 44.7042C96.7684 42.5197 94.3176 41.0688 91.5325 41.0688C88.7477 41.0688 86.2966 42.5197 84.8909 44.7042C83.4852 42.5197 81.0344 41.0688 78.2496 41.0688C75.4648 41.0688 73.0137 42.5197 71.608 44.7039C70.2024 42.5197 67.7515 41.0688 64.9665 41.0688C62.1448 41.0688 59.6657 42.5578 58.2695 44.7904C56.8734 42.5578 54.3943 41.0688 51.5726 41.0688C47.6317 41.0688 44.3565 43.9713 43.7714 47.7509H38.2912C37.7174 47.7509 37.2168 48.1408 37.0765 48.6971C30.5662 74.4943 35.9371 52.6196 20.1593 118.455C19.9714 119.242 20.5675 120 21.3779 120H124.107C124.133 119.995 124.562 120.024 124.946 119.681C124.946 119.68 124.947 119.68 124.948 119.679C124.948 119.679 124.948 119.679 124.948 119.679C124.953 119.675 124.958 119.67 124.962 119.666C124.962 119.666 124.962 119.666 124.962 119.666C124.963 119.665 124.964 119.664 124.965 119.664C124.965 119.663 124.965 119.663 124.966 119.663C124.966 119.662 124.967 119.662 124.967 119.661C125.201 119.443 125.332 119.156 125.359 118.861C125.359 118.861 125.359 118.861 125.359 118.86C125.359 118.835 125.371 118.767 125.359 118.633C119.472 45.8167 119.733 48.8392 119.67 48.6372ZM104.816 43.5746C107.369 43.5746 109.51 45.3624 110.062 47.7509H99.5697C100.122 45.3624 102.262 43.5746 104.816 43.5746ZM91.5325 43.5746C94.0863 43.5746 96.2264 45.3624 96.7784 47.7509H86.2863C86.8386 45.3624 88.9787 43.5746 91.5325 43.5746ZM78.2496 43.5746C80.8034 43.5746 82.9435 45.3624 83.4955 47.7509H73.0035C73.5557 45.3624 75.6956 43.5746 78.2496 43.5746ZM64.9665 43.5746C67.5203 43.5746 69.6604 45.3624 70.2124 47.7509H59.7203C60.2726 45.3624 62.4127 43.5746 64.9665 43.5746ZM51.5728 43.5746C54.1266 43.5746 56.2667 45.3624 56.819 47.7509H46.327C46.879 45.3624 49.0188 43.5746 51.5728 43.5746ZM39.2672 50.2567H43.7862C44.4053 53.9965 47.6605 56.8581 51.5728 56.8581C52.2647 56.8581 52.8257 56.297 52.8257 55.6052C52.8257 54.9133 52.2647 54.3523 51.5728 54.3523C49.0479 54.3523 46.9291 52.6043 46.3475 50.2567H57.1796C57.7987 53.9965 61.0539 56.8581 64.9662 56.8581C65.658 56.8581 66.2191 56.297 66.2191 55.6052C66.2191 54.9133 65.658 54.3523 64.9662 54.3523C62.4412 54.3523 60.3224 52.6043 59.7409 50.2567H70.4624C71.0816 53.9965 74.3367 56.8581 78.2491 56.8581C78.9412 56.8581 79.5019 56.297 79.5019 55.6052C79.5019 54.9133 78.9412 54.3523 78.2491 54.3523C75.7244 54.3523 73.6053 52.6043 73.0238 50.2567H83.7453C84.3645 53.9965 87.6196 56.8581 91.532 56.8581C92.2241 56.8581 92.7848 56.297 92.7848 55.6052C92.7848 54.9133 92.2241 54.3523 91.532 54.3523C89.0073 54.3523 86.8885 52.6043 86.3069 50.2567H97.0285C97.6476 53.9965 100.903 56.8581 104.815 56.8581C105.507 56.8581 106.068 56.297 106.068 55.6052C106.068 54.9133 105.507 54.3523 104.815 54.3523C102.29 54.3523 100.172 52.6043 99.59 50.2567H116.864L113.112 65.124H35.5147L39.2672 50.2567ZM34.8948 67.6298H112.5L100.571 117.494H22.9657L34.8948 67.6298ZM104.331 117.494L112.606 108.091L121.256 117.494H104.331ZM113.892 105.789L115.334 92.5725C115.409 91.8846 114.912 91.2662 114.224 91.191C113.536 91.1166 112.917 91.613 112.843 92.3008L111.382 105.688L103.952 114.132L115.304 66.6803L117.835 56.6528L122.569 115.22L113.892 105.789Z"/>
                    <path
                        d="M80.0108 101.207H71.2409C70.5491 101.207 69.988 101.768 69.988 102.46V109.977C69.988 110.669 70.5491 111.23 71.2409 111.23H80.0108C80.7029 111.23 81.2636 110.669 81.2636 109.977V102.46C81.2636 101.768 80.7029 101.207 80.0108 101.207ZM78.7579 108.724H72.4937V103.713H78.7579V108.724Z"/>
                    <path
                        d="M93.7923 101.207H85.0224C84.3303 101.207 83.7695 101.768 83.7695 102.46V109.977C83.7695 110.669 84.3303 111.23 85.0224 111.23H93.7923C94.4844 111.23 95.0451 110.669 95.0451 109.977V102.46C95.0451 101.768 94.4844 101.207 93.7923 101.207ZM92.5394 108.724H86.2752V103.713H92.5394V108.724Z"/>
                    <path
                        d="M83.8947 88.6782C83.8947 87.9861 83.3339 87.4253 82.6419 87.4253H73.872C73.1802 87.4253 72.6191 87.9861 72.6191 88.6782V96.1954C72.6191 96.8875 73.1802 97.4482 73.872 97.4482H82.6419C83.3339 97.4482 83.8947 96.8875 83.8947 96.1954V88.6782ZM81.389 94.9425H75.1248V89.931H81.389V94.9425Z"/>
                    <path
                        d="M96.4231 87.4253H87.6532C86.9612 87.4253 86.4004 87.9861 86.4004 88.6782V96.1954C86.4004 96.8875 86.9612 97.4482 87.6532 97.4482H96.4231C97.1152 97.4482 97.676 96.8875 97.676 96.1954V88.6782C97.676 87.9861 97.1152 87.4253 96.4231 87.4253ZM95.1703 94.9425H88.9061V89.931H95.1703V94.9425Z"/>
                    <path
                        d="M76.3776 83.6665H85.1475C85.8396 83.6665 86.4003 83.1058 86.4003 82.4137V74.8964C86.4003 74.2043 85.8396 73.6436 85.1475 73.6436H76.3776C75.6855 73.6436 75.1248 74.2043 75.1248 74.8964V82.4137C75.1248 83.1058 75.6855 83.6665 76.3776 83.6665ZM77.6304 76.1493H83.8947V81.1608H77.6304V76.1493Z"/>
                    <path
                        d="M98.929 73.6436H90.1591C89.467 73.6436 88.9062 74.2043 88.9062 74.8964V82.4137C88.9062 83.1058 89.467 83.6665 90.1591 83.6665H98.929C99.6211 83.6665 100.182 83.1058 100.182 82.4137V74.8964C100.182 74.2043 99.6211 73.6436 98.929 73.6436ZM97.6761 81.1608H91.4119V76.1493H97.6761V81.1608Z"/>
                    <path
                        d="M31.1499 41.0689C36.6765 41.0689 41.1727 36.5726 41.1727 31.0459C41.1727 25.5193 36.6765 21.0229 31.1499 21.0229C25.6234 21.0229 21.1272 25.5193 21.1272 31.0459C21.1272 36.5726 25.6234 41.0689 31.1499 41.0689ZM31.1499 23.5287C35.2948 23.5287 38.667 26.9009 38.667 31.0459C38.667 35.1909 35.2948 38.5632 31.1499 38.5632C27.005 38.5632 23.6329 35.1909 23.6329 31.0459C23.6329 26.9009 27.005 23.5287 31.1499 23.5287Z"/>
                    <path
                        d="M123.86 34.8046C127.314 34.8046 130.125 31.9944 130.125 28.5402C130.125 25.0861 127.314 22.2759 123.86 22.2759C120.406 22.2759 117.596 25.0861 117.596 28.5402C117.596 31.9944 120.406 34.8046 123.86 34.8046ZM123.86 24.7816C125.933 24.7816 127.619 26.4677 127.619 28.5402C127.619 30.6127 125.933 32.2989 123.86 32.2989C121.788 32.2989 120.102 30.6127 120.102 28.5402C120.102 26.4677 121.788 24.7816 123.86 24.7816Z"/>
                    <path
                        d="M96.9242 17.2645C97.9621 17.2645 98.8034 16.4231 98.8034 15.3852C98.8034 14.3473 97.9621 13.5059 96.9242 13.5059C95.8863 13.5059 95.0449 14.3473 95.0449 15.3852C95.0449 16.4231 95.8863 17.2645 96.9242 17.2645Z"/>
                    <path
                        d="M126.993 51.0921C128.03 51.0921 128.872 50.2507 128.872 49.2128C128.872 48.1749 128.03 47.3335 126.993 47.3335C125.955 47.3335 125.113 48.1749 125.113 49.2128C125.113 50.2507 125.955 51.0921 126.993 51.0921Z"/>
                    <path
                        d="M71.8673 24.7816C72.9052 24.7816 73.7466 23.9402 73.7466 22.9023C73.7466 21.8643 72.9052 21.0229 71.8673 21.0229C70.8294 21.0229 69.988 21.8643 69.988 22.9023C69.988 23.9402 70.8294 24.7816 71.8673 24.7816Z"/>
                    <path
                        d="M126.993 86.1722C128.03 86.1722 128.872 85.3308 128.872 84.2929C128.872 83.255 128.03 82.4136 126.993 82.4136C125.955 82.4136 125.113 83.255 125.113 84.2929C125.113 85.3308 125.955 86.1722 126.993 86.1722Z"/>
                    <path
                        d="M59.7562 83.5361L57.923 85.3693C52.7741 81.1924 45.2222 81.4152 40.3129 86.1972C34.8735 91.4958 35.0176 100.079 40.3121 105.227C42.9789 107.82 46.6475 109.187 50.399 108.961C57.1676 108.55 62.5175 103.129 62.8435 96.3512C62.9176 94.8107 62.7282 93.2984 62.2862 91.8431L65.1747 88.9545C66.6684 87.4603 66.6681 85.0297 65.1747 83.5361C63.6778 82.0391 61.2536 82.0384 59.7562 83.5361ZM50.2471 106.46C43.7266 106.856 38.5967 101.544 38.7982 95.3404C38.9831 89.6418 43.7912 84.9195 49.5734 84.9195C51.9746 84.9195 54.2605 85.706 56.138 87.1544L50.31 92.9825L49.3727 92.0453C47.8758 90.5481 45.4518 90.5474 43.9541 92.0453C42.4602 93.5392 42.4602 95.9698 43.9541 97.4637L49.424 102.934C49.9134 103.423 50.7062 103.423 51.1958 102.934L60.2052 93.9241C61.2792 100.386 56.3495 106.09 50.2471 106.46ZM63.4027 87.1829L50.3098 100.276L45.7259 95.6919C45.209 95.1747 45.209 94.3338 45.7259 93.8169C46.2436 93.2992 47.0827 93.2989 47.6006 93.8169L49.4238 95.6401C49.9134 96.1299 50.7072 96.1287 51.1955 95.6401L61.5275 85.3079C62.0451 84.7902 62.8843 84.7899 63.4022 85.3079C63.9196 85.8248 63.9196 86.666 63.4027 87.1829Z"/>
                    <path
                        d="M25.5123 56.1035C26.5502 56.1035 27.3916 55.2621 27.3916 54.2242C27.3916 53.1862 26.5502 52.3448 25.5123 52.3448C24.4744 52.3448 23.6331 53.1862 23.6331 54.2242C23.6331 55.2621 24.4744 56.1035 25.5123 56.1035Z"/>
                    <path
                        d="M40.5463 14.7586C41.5842 14.7586 42.4256 13.9172 42.4256 12.8793C42.4256 11.8414 41.5842 11 40.5463 11C39.5084 11 38.6671 11.8414 38.6671 12.8793C38.6671 13.9172 39.5084 14.7586 40.5463 14.7586Z"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_381">
                        <rect width="130" height="130" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            }
          </li>
          <li className={s.counterItem}>
            <CountUp end={10} className={s.counterNumber}/><span className={s.description}>mln</span>
            <h4>SENIORÓW W POLSCE</h4>
            {images && <svg className={s.counterIcon} width="105" height="105" viewBox="0 0 105 105" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M90.3594 51.8945C92.7449 50.4094 94.3365 47.7644 94.3365 44.7537C94.3365 40.118 90.5649 36.3464 85.9292 36.3464C81.2934 36.3464 77.5219 40.118 77.5219 44.7537C77.5219 47.7317 79.0796 50.3508 81.4217 51.8448C75.7741 53.6979 71.6827 59.0167 71.6827 65.2762V75.1423C71.6827 75.7 72.1346 76.1519 72.6923 76.1519H76.0996V94.9041C76.0996 97.5932 78.6654 99.9522 81.5905 99.9522C83.4391 99.9522 85.0763 99.0329 86.0716 97.6285C87.0672 99.0329 88.7044 99.9522 90.553 99.9522C93.4779 99.9522 96.0437 97.5932 96.0437 94.9041V76.1519H98.9423C99.5001 76.1519 99.952 75.7 99.952 75.1423V65.2762C99.952 59.0711 95.9311 53.7912 90.3594 51.8945ZM79.5414 44.7537C79.5414 41.2314 82.4068 38.3657 85.9294 38.3657C89.452 38.3657 92.3174 41.2314 92.3174 44.7537C92.3174 48.2761 89.452 51.1417 85.9294 51.1417C82.4068 51.1417 79.5414 48.2761 79.5414 44.7537ZM81.5905 97.933C79.6033 97.933 78.1188 96.334 78.1188 94.9041V76.1519H85.0621V94.4615C85.0621 96.3756 83.5047 97.933 81.5905 97.933ZM94.0245 94.9041C94.0245 96.334 92.5398 97.933 90.553 97.933C88.6388 97.933 87.0814 96.3756 87.0814 94.4615V76.1519H94.0247V94.9041H94.0245ZM97.9327 74.1327H96.0439V69.3271C96.0439 68.7694 95.592 68.3175 95.0343 68.3175C94.4766 68.3175 94.0247 68.7694 94.0247 69.3271V74.1327H78.119V69.3271C78.119 68.7694 77.6671 68.3175 77.1094 68.3175C76.5517 68.3175 76.0998 68.7694 76.0998 69.3271V74.1327H73.7019V65.2762C73.7019 58.5957 79.1369 53.1608 85.8173 53.1608C92.4978 53.1608 97.9327 58.5957 97.9327 65.2762V74.1327Z"/>
                <path
                    d="M23.7248 51.8945C26.1101 50.4094 27.7019 47.7644 27.7019 44.7537C27.7019 40.118 23.9303 36.3464 19.2946 36.3464C14.6588 36.3464 10.8873 40.118 10.8873 44.7537C10.8873 47.7317 12.445 50.3508 14.7871 51.8448C9.13948 53.6979 5.04811 59.0167 5.04811 65.2762V75.1423C5.04811 75.7 5.50001 76.1519 6.05773 76.1519H9.46518V94.9041C9.46518 97.5932 12.031 99.9522 14.9559 99.9522C16.8045 99.9522 18.4417 99.0329 19.4369 97.6285C20.4326 99.0329 22.0698 99.9522 23.9184 99.9522C26.8433 99.9522 29.4091 97.5932 29.4091 94.9041V76.1519H32.3077C32.8654 76.1519 33.3173 75.7 33.3173 75.1423V65.2762C33.3173 59.0711 29.2965 53.7912 23.7248 51.8945ZM12.9068 44.7537C12.9068 41.2314 15.7722 38.3657 19.2948 38.3657C22.8173 38.3657 25.6828 41.2314 25.6828 44.7537C25.6828 48.2761 22.8173 51.1417 19.2948 51.1417C15.7722 51.1417 12.9068 48.2761 12.9068 44.7537ZM14.9559 97.933C12.9689 97.933 11.4844 96.334 11.4844 94.9041V76.1519H18.4275V94.4615C18.4275 96.3756 16.8701 97.933 14.9559 97.933ZM27.3899 94.9041C27.3899 96.334 25.9052 97.933 23.9184 97.933C22.0042 97.933 20.4468 96.3756 20.4468 94.4615V76.1519H27.3901V94.9041H27.3899ZM31.2981 74.1327H29.4093V69.3271C29.4093 68.7694 28.9574 68.3175 28.3997 68.3175C27.842 68.3175 27.3901 68.7694 27.3901 69.3271V74.1327H11.4844V69.3271C11.4844 68.7694 11.0325 68.3175 10.4748 68.3175C9.91708 68.3175 9.46518 68.7694 9.46518 69.3271V74.1327H7.06734V65.2762C7.06734 58.5957 12.5023 53.1608 19.1827 53.1608C25.8632 53.1608 31.2981 58.5957 31.2981 65.2762V74.1327Z"/>
                <path
                    d="M64.6154 44.8537C65.1731 44.8537 65.625 44.4016 65.625 43.8441V33.9777C65.625 27.7728 61.6041 22.4928 56.0325 20.5963C58.418 19.1112 60.0096 16.4662 60.0096 13.4555C60.0096 8.81974 56.2382 5.04822 51.6025 5.04822C46.9667 5.04822 43.1952 8.81974 43.1952 13.4555C43.1952 16.4335 44.7528 19.0526 47.095 20.5466C41.4472 22.3997 37.3558 27.7183 37.3558 33.9777V43.8441C37.3558 44.4016 37.8077 44.8537 38.3654 44.8537H41.7729V63.6059C41.7729 66.2949 44.3387 68.654 47.2636 68.654C49.1122 68.654 50.7494 67.7346 51.7446 66.3303C52.7403 67.7346 54.3775 68.654 56.2261 68.654C59.151 68.654 61.7168 66.2949 61.7168 63.6059V44.8537H64.6154ZM45.2144 13.4555C45.2144 9.93314 48.0799 7.06745 51.6025 7.06745C55.125 7.06745 57.9905 9.93314 57.9905 13.4555C57.9905 16.9778 55.125 19.8435 51.6025 19.8435C48.0799 19.8435 45.2144 16.9778 45.2144 13.4555ZM39.375 42.8345V33.9777C39.375 27.2973 44.81 21.8624 51.4904 21.8624C58.1708 21.8624 63.6058 27.2973 63.6058 33.9777V42.8345H61.7168V38.0289C61.7168 37.4714 61.2649 37.0193 60.7072 37.0193C60.1495 37.0193 59.6976 37.4714 59.6976 38.0289V42.8345H43.7921V38.0289C43.7921 37.4714 43.3402 37.0193 42.7825 37.0193C42.2248 37.0193 41.7729 37.4714 41.7729 38.0289V42.8345H39.375ZM47.2636 66.6348C45.2766 66.6348 43.7921 65.0357 43.7921 63.6059V44.8537H50.7352V63.1633C50.7352 65.0773 49.1778 66.6348 47.2636 66.6348ZM59.6976 63.6059C59.6976 65.0357 58.213 66.6348 56.2261 66.6348C54.3119 66.6348 52.7545 65.0773 52.7545 63.1633V44.8537H59.6978V63.6059H59.6976Z"/>
                <path
                    d="M80.7693 24.2311C84.1095 24.2311 86.827 21.5136 86.827 18.1734C86.827 14.8332 84.1095 12.1157 80.7693 12.1157C77.4291 12.1157 74.7116 14.8332 74.7116 18.1734C74.7116 21.5136 77.4291 24.2311 80.7693 24.2311ZM80.7693 14.135C82.9961 14.135 84.8078 15.9466 84.8078 18.1734C84.8078 20.4002 82.9961 22.2119 80.7693 22.2119C78.5425 22.2119 76.7309 20.4002 76.7309 18.1734C76.7309 15.9466 78.5425 14.135 80.7693 14.135Z"/>
                <path
                    d="M44.4231 79.7598C40.5262 79.7598 37.3558 82.9302 37.3558 86.8271C37.3558 90.724 40.5262 93.8944 44.4231 93.8944C48.32 93.8944 51.4904 90.724 51.4904 86.8271C51.4904 82.9302 48.32 79.7598 44.4231 79.7598ZM44.4231 91.8752C41.6396 91.8752 39.375 89.6106 39.375 86.8271C39.375 84.0436 41.6396 81.779 44.4231 81.779C47.2066 81.779 49.4712 84.0436 49.4712 86.8271C49.4712 89.6106 47.2066 91.8752 44.4231 91.8752Z"/>
                <path
                    d="M92.3798 26.2503C93.2162 26.2503 93.8942 25.5722 93.8942 24.7359C93.8942 23.8995 93.2162 23.2214 92.3798 23.2214C91.5434 23.2214 90.8654 23.8995 90.8654 24.7359C90.8654 25.5722 91.5434 26.2503 92.3798 26.2503Z"/>
                <path
                    d="M72.1875 40.3846C73.0239 40.3846 73.702 39.7065 73.702 38.8701C73.702 38.0337 73.0239 37.3557 72.1875 37.3557C71.3511 37.3557 70.6731 38.0337 70.6731 38.8701C70.6731 39.7065 71.3511 40.3846 72.1875 40.3846Z"/>
                <path
                    d="M14.6394 13.1253C15.4758 13.1253 16.1539 12.4473 16.1539 11.6109C16.1539 10.7745 15.4758 10.0964 14.6394 10.0964C13.803 10.0964 13.125 10.7745 13.125 11.6109C13.125 12.4473 13.803 13.1253 14.6394 13.1253Z"/>
                <path
                    d="M32.8125 30.2885C33.6489 30.2885 34.327 29.6105 34.327 28.7741C34.327 27.9377 33.6489 27.2596 32.8125 27.2596C31.9761 27.2596 31.2981 27.9377 31.2981 28.7741C31.2981 29.6105 31.9761 30.2885 32.8125 30.2885Z"/>
                <path
                    d="M65.1204 84.3032C65.9568 84.3032 66.6348 83.6251 66.6348 82.7887C66.6348 81.9523 65.9568 81.2743 65.1204 81.2743C64.284 81.2743 63.606 81.9523 63.606 82.7887C63.606 83.6251 64.284 84.3032 65.1204 84.3032Z"/>
                <path
                    d="M38.8704 75.7211C39.7068 75.7211 40.3848 75.0431 40.3848 74.2067C40.3848 73.3703 39.7068 72.6923 38.8704 72.6923C38.034 72.6923 37.356 73.3703 37.356 74.2067C37.356 75.0431 38.034 75.7211 38.8704 75.7211Z"/>
            </svg>
            }
          </li>
          <li className={s.counterItem}>
            <CountUp end={11844} className={s.counterNumber}/><span className={s.description}>zł</span>
            <h4>ZEBRANA KWOTA</h4>
            {images && <svg className={s.counterIcon} width="116" height="116" viewBox="0 0 116 116"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M89.4322 59.3391H101.723C102.339 59.3391 102.838 58.8396 102.838 58.2237C102.838 57.6075 102.339 57.1081 101.723 57.1081H89.4322C88.8546 40.1576 75.1733 26.4763 58.2229 25.8987V13.6081C58.2229 12.9921 57.7236 12.4927 57.1075 12.4927C56.4916 12.4927 55.9921 12.9921 55.9921 13.6081V25.8987C39.0416 26.4763 25.3603 40.1573 24.7827 57.1081H12.4921C11.8762 57.1081 11.3767 57.6075 11.3767 58.2237C11.3767 58.8396 11.8762 59.3391 12.4921 59.3391H24.7827C25.3603 76.2896 39.0416 89.9709 55.9921 90.5484V102.839C55.9921 103.455 56.4916 103.954 57.1075 103.954C57.7236 103.954 58.2229 103.455 58.2229 102.839V90.5484C75.1733 89.9709 88.8546 76.2896 89.4322 59.3391ZM26.9921 58.2237C26.9921 41.6178 40.5018 28.1081 57.1075 28.1081C73.7131 28.1081 87.2228 41.6176 87.2228 58.2237C87.2228 74.8293 73.7131 88.3391 57.1075 88.3391C40.5018 88.3391 26.9921 74.8293 26.9921 58.2237Z"/>
                <path
                    d="M96.8873 63.8162C96.2787 63.7149 95.7045 64.1242 95.6028 64.7317C92.8538 81.1153 79.9988 93.9701 63.6151 96.7193C63.0075 96.8213 62.5977 97.3964 62.6996 98.0041C62.8007 98.6079 63.3729 99.0219 63.9841 98.9193C81.3056 96.0131 94.8963 82.4223 97.8028 65.1006C97.9048 64.4932 97.495 63.9181 96.8873 63.8162Z"/>
                <path
                    d="M17.5135 52.6471C18.0484 52.6471 18.5207 52.2612 18.6121 51.7162C21.3611 35.3323 34.2161 22.4775 50.5998 19.7283C51.2072 19.6264 51.6173 19.0513 51.5153 18.4436C51.4134 17.8362 50.8403 17.4266 50.2306 17.5281C32.9091 20.4348 19.3186 34.0256 16.4121 51.347C16.2979 52.0276 16.8228 52.6471 17.5135 52.6471Z"/>
                <path
                    d="M50.5999 96.7194C34.2163 93.9706 21.3614 81.1156 18.6122 64.7315C18.5103 64.1241 17.9368 63.7147 17.3275 63.8162C16.7201 63.9182 16.3101 64.4933 16.412 65.1009C19.3185 82.4224 32.9092 96.0131 50.2307 98.9196C50.8428 99.0222 51.4139 98.6077 51.5152 98.0043C51.6174 97.3967 51.2076 96.8213 50.5999 96.7194Z"/>
                <path
                    d="M63.6151 19.7286C79.9988 22.4778 92.8539 35.3326 95.6028 51.7163C95.6941 52.2615 96.1663 52.6474 96.7015 52.6474C97.393 52.6474 97.9168 52.0268 97.8028 51.3473C94.8966 34.0258 81.3061 20.4351 63.9841 17.5286C63.3758 17.4271 62.8014 17.8367 62.6996 18.4441C62.5977 19.0513 63.0075 19.6267 63.6151 19.7286Z"/>
                <path
                    d="M78.0767 75.8472C78.6928 75.8472 79.1921 75.3477 79.1921 74.7318C79.1921 74.1157 78.6928 73.6164 78.0767 73.6164H76.9613V51.3085C76.9613 50.6926 76.462 50.1931 75.8459 50.1931H70.269C69.6528 50.1931 69.1536 50.6926 69.1536 51.3085V53.5393H64.6921C64.0759 53.5393 63.5767 54.0387 63.5767 54.6546V59.1164H60.2305V53.5393C60.2305 52.9233 59.7313 52.4239 59.1151 52.4239H54.6536V49.0777C54.6536 48.4618 54.1541 47.9623 53.5382 47.9623H47.9613C47.3454 47.9623 46.8459 48.4618 46.8459 49.0777V55.77H42.3844C41.7684 55.77 41.269 56.2695 41.269 56.8854V73.6164H39.0382V42.3854C39.0382 41.7695 38.5387 41.27 37.9228 41.27C37.3069 41.27 36.8074 41.7695 36.8074 42.3854V43.5008H35.692C35.0761 43.5008 34.5767 44.0003 34.5767 44.6162C34.5767 45.2321 35.0761 45.7316 35.692 45.7316H36.8074V46.8469H35.692C35.0761 46.8469 34.5767 47.3464 34.5767 47.9623C34.5767 48.5782 35.0761 49.0777 35.692 49.0777H36.8074V50.1931H35.692C35.0761 50.1931 34.5767 50.6926 34.5767 51.3085C34.5767 51.9244 35.0761 52.4239 35.692 52.4239H36.8074V53.5393H35.692C35.0761 53.5393 34.5767 54.0387 34.5767 54.6546C34.5767 55.2706 35.0761 55.77 35.692 55.77H36.8074V56.8854H35.692C35.0761 56.8854 34.5767 57.3849 34.5767 58.001C34.5767 58.6169 35.0761 59.1164 35.692 59.1164H36.8074V60.2318H35.692C35.0761 60.2318 34.5767 60.731 34.5767 61.3472C34.5767 61.9631 35.0761 62.4626 35.692 62.4626H36.8074V63.5779H35.692C35.0761 63.5779 34.5767 64.0772 34.5767 64.6933C34.5767 65.3092 35.0761 65.8087 35.692 65.8087H36.8074V66.9241H35.692C35.0761 66.9241 34.5767 67.4233 34.5767 68.0395C34.5767 68.6554 35.0761 69.1549 35.692 69.1549H36.8074V70.2703H35.692C35.0761 70.2703 34.5767 70.7695 34.5767 71.3856C34.5767 72.0016 35.0761 72.501 35.692 72.501H36.8074V74.7318C36.8074 75.3477 37.3069 75.8472 37.9228 75.8472H78.0767ZM71.3844 52.4239H74.7305V73.6164H71.3844C71.3844 69.2022 71.3844 55.3265 71.3844 52.4239ZM65.8074 55.77H69.1536V73.6164H65.8074C65.8074 72.1015 65.8074 58.1726 65.8074 55.77ZM63.5767 61.3472V73.6164H60.2305V61.3472H63.5767ZM43.4997 58.001H46.8459V73.6164H43.4997V58.001ZM49.0767 50.1931H52.4228V73.6164H49.0767C49.0767 71.3682 49.0767 52.545 49.0767 50.1931ZM54.6536 54.6546H57.9997V73.6164H54.6536V54.6546Z"/>
                <path
                    d="M42.9583 47.8036L48.2704 44.6163H53.1471L58.4187 48.8333C58.6163 48.9915 58.8619 49.0778 59.1153 49.0778H65.8076C66.0738 49.0778 66.3314 48.9826 66.5335 48.8092L74.3412 42.1169C74.809 41.7161 74.8632 41.0118 74.4621 40.5442C74.0615 40.0764 73.357 40.0227 72.8894 40.4231L65.3949 46.8468H59.5066L54.2353 42.6298C54.0374 42.4714 53.7918 42.3853 53.5386 42.3853H47.9617C47.7596 42.3853 47.5613 42.4402 47.3879 42.5441L41.811 45.8903C41.2828 46.2073 41.1114 46.8923 41.4284 47.4206C41.745 47.9493 42.4303 48.1201 42.9583 47.8036Z"/>
                <path
                    d="M17.8461 90.3467C13.5409 90.3467 10.0384 93.8492 10.0384 98.1544C10.0384 102.46 13.5409 105.962 17.8461 105.962C22.1512 105.962 25.6537 102.46 25.6537 98.1544C25.6537 93.8492 22.1512 90.3467 17.8461 90.3467ZM17.8461 103.731C14.7709 103.731 12.2691 101.229 12.2691 98.1544C12.2691 95.0793 14.7709 92.5774 17.8461 92.5774C20.9212 92.5774 23.423 95.0793 23.423 98.1544C23.423 101.229 20.9212 103.731 17.8461 103.731Z"/>
                <path
                    d="M99.2693 24.5391C102.344 24.5391 104.846 22.0373 104.846 18.9622C104.846 15.8871 102.344 13.3853 99.2693 13.3853C96.1942 13.3853 93.6924 15.8871 93.6924 18.9622C93.6924 22.0373 96.1942 24.5391 99.2693 24.5391ZM99.2693 15.616C101.114 15.616 102.615 17.1171 102.615 18.9622C102.615 20.8072 101.114 22.3083 99.2693 22.3083C97.424 22.3083 95.9231 20.8072 95.9231 18.9622C95.9231 17.1171 97.424 15.616 99.2693 15.616Z"/>
                <path
                    d="M38.4807 12.2695C39.4047 12.2695 40.1538 11.5204 40.1538 10.5964C40.1538 9.6724 39.4047 8.92334 38.4807 8.92334C37.5567 8.92334 36.8076 9.6724 36.8076 10.5964C36.8076 11.5204 37.5567 12.2695 38.4807 12.2695Z"/>
                <path
                    d="M15.0575 32.3461C15.9815 32.3461 16.7306 31.5971 16.7306 30.6731C16.7306 29.7491 15.9815 29 15.0575 29C14.1335 29 13.3844 29.7491 13.3844 30.6731C13.3844 31.5971 14.1335 32.3461 15.0575 32.3461Z"/>
                <path
                    d="M79.7498 16.7309C80.6738 16.7309 81.4229 15.9819 81.4229 15.0578C81.4229 14.1338 80.6738 13.3848 79.7498 13.3848C78.8258 13.3848 78.0767 14.1338 78.0767 15.0578C78.0767 15.9819 78.8258 16.7309 79.7498 16.7309Z"/>
                <path
                    d="M100.942 39.0385C101.866 39.0385 102.615 38.2895 102.615 37.3655C102.615 36.4414 101.866 35.6924 100.942 35.6924C100.018 35.6924 99.269 36.4414 99.269 37.3655C99.269 38.2895 100.018 39.0385 100.942 39.0385Z"/>
                <path
                    d="M103.173 83.6543C104.097 83.6543 104.846 82.9052 104.846 81.9812C104.846 81.0572 104.097 80.3081 103.173 80.3081C102.249 80.3081 101.5 81.0572 101.5 81.9812C101.5 82.9052 102.249 83.6543 103.173 83.6543Z"/>
                <path
                    d="M36.2497 107.078C37.1738 107.078 37.9228 106.329 37.9228 105.405C37.9228 104.481 37.1738 103.731 36.2497 103.731C35.3257 103.731 34.5767 104.481 34.5767 105.405C34.5767 106.329 35.3257 107.078 36.2497 107.078Z"/>
                <path
                    d="M12.8266 78.0776C13.7507 78.0776 14.4997 77.3285 14.4997 76.4045C14.4997 75.4805 13.7507 74.7314 12.8266 74.7314C11.9026 74.7314 11.1536 75.4805 11.1536 76.4045C11.1536 77.3285 11.9026 78.0776 12.8266 78.0776Z"/>
                <path
                    d="M88.6731 103.731C89.5971 103.731 90.3461 102.982 90.3461 102.058C90.3461 101.134 89.5971 100.385 88.6731 100.385C87.7491 100.385 87 101.134 87 102.058C87 102.982 87.7491 103.731 88.6731 103.731Z"/>
            </svg>}
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Counter

