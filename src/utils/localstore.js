export const setItem = (key, value) => {
  if (!localStorage) return
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = key => {
  if (!localStorage) return undefined
  return JSON.parse(localStorage.getItem(key))
}
