import {useState} from "react";

type LocalStorageKey = string;

const setDataToLocalStorage = (key: LocalStorageKey, value: string): void => {
    localStorage.setItem(key, value);
};

const removeDataFromLocalStorage = (key: LocalStorageKey): void => {
    localStorage.removeItem(key);
};

export {setDataToLocalStorage, removeDataFromLocalStorage};
