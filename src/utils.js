export function dateFormat(strDate) {
  if (strDate == null) return ''

  const dateObject = new Date(strDate)

  if (`${dateObject}` === 'Invalid Date') return ''

  const year = dateObject.getFullYear()
  const month = `${dateObject.getMonth() + 1}`.padStart(2, '0')
  const date = `${dateObject.getDate()}`.padStart(2, '0')

  return `${year}.${month}.${date}`
}
