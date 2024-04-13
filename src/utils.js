export function dateFormat(strDate) {
  const year = strDate.substring(0, 4)
  const month = strDate.substring(5, 7)
  const date = strDate.substring(8, 10)

  return `${year}.${month}.${date}`
}
