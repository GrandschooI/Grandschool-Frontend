export const setDataToLocalStorage = (item: string, data: string) => {
  localStorage.setItem(item, data)
}

export const removeDataFromLocalStorage = (item: string) => {
  localStorage.removeItem(item)
}