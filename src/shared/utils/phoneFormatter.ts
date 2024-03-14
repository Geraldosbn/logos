import { extractNumbers } from './extractNumbers'

export const phoneFormatter = (value: string) => {
  const onlyNumbers = extractNumbers(value)

  return onlyNumbers.slice(0, 11)
}
