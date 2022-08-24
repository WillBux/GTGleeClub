import dayjs, { Dayjs } from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import { GraphQLClient } from 'graphql-request'
import { DateTime, getSdk } from 'src/gql-operations'

export const API_URL = 'https://api.glubhub.org/'
export const EST_TIMEZONE = 'America/New_York'

dayjs.extend(timezone)
dayjs.tz.setDefault(EST_TIMEZONE)

export const now = (): Dayjs => dayjs()

export const datetimeToDayjs = (datetime: DateTime): Dayjs =>
  dayjs(`${datetime.date} ${datetime.time}`)

export const fullDateTimeFormatter = (datetime: DateTime): string =>
  datetimeToDayjs(datetime).format('dddd, MMMM D, YYYY h:mm A')

export const dateFormatter = (date?: string | Dayjs | null): string =>
  date ? dayjs(date).format('dddd, MMMM D') : ''

export const gqlClient = getSdk(new GraphQLClient(API_URL))
