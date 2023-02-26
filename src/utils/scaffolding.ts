import cn from "classnames";
import s from "../components/AppBody/AboutUs/AboutUsContent/ReviewPage/ReviewPage.module.scss";
import {useAppSelector} from "./Hooks/useAppSelector";
import {getThemeStyle} from "../Redux/selectors/styleSelector";

type LocalStorageKey = string;

const setDataToLocalStorage = (key: LocalStorageKey, value: string): void => {
    localStorage.setItem(key, value);
};

const removeDataFromLocalStorage = (key: LocalStorageKey): void => {
    localStorage.removeItem(key);
};

export {setDataToLocalStorage, removeDataFromLocalStorage};
