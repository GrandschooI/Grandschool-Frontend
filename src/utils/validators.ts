export const required = (value: string) => {
  if (value) return undefined

  return 'Это поле обязательно для заполнения'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`

  return undefined
}
