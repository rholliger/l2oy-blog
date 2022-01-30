import dayjs from 'dayjs'

export const formattedDate = (date?: string) => {
  if (!date) {
    return ''
  }

  return dayjs(date).format('DD. MMMM YYYY, HH:mm')
}
