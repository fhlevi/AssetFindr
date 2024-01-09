import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/id'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)

function formatDate(date: Dayjs, format: string | null = null): string {
  const dateInLocale = date.tz('Asia/Jakarta')

  if (format) return dateInLocale.format(format)
  return dateInLocale.format('YYYY-M-D')
}

export function convertDate(date: string | number | Date, format: string | null = null): string {
  return formatDate(dayjs(date), format)
}

export function dayjsFormat(date: string | number | Date, format: string | null = null): string {
  return formatDate(dayjs(date), format)
}

export function now(format: string | null = null): string {
  return formatDate(dayjs(), format)
}
