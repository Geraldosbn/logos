export const extractNumbers = (value: string): string => {
  const regex = /\d+/g
  const numeros: string[] = []
  let match: RegExpExecArray | null

  while ((match = regex.exec(value)) !== null) {
    numeros.push(match[0])
  }

  return numeros.join('')
}
