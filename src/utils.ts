const languages: Record<string, string> = {
  en: 'en-US',
  fr: 'fr-FR'
}

export const formatDate = (date: string, language?: string): string => {
  const foundLanguage: string | undefined = Object.keys(languages).find(
    (key: string) => key === language
  )

  return new Date(date).toLocaleString(foundLanguage ?? languages.en, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export const isExternalUrl: (url: string) => boolean = (url: string): boolean =>
  !url.startsWith('/')

export const formatBytes = (bytes: number, decimals: number = 2): string => {
  const k = 1000
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const getParsedParameter = (
  parameter: string | Readonly<string[]> | undefined,
  defaultValue: number
): number | Error => {
  if (!parameter || typeof parameter !== 'string') return defaultValue
  const parsedNumber = parseInt(parameter)
  if (isNaN(parsedNumber)) return new Error(`Invalid parameter <${parsedNumber}>`)
  return parsedNumber
}
