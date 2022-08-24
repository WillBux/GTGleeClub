export interface FormInputType<T> {
  toString: (t: T) => string
  fromString: (s: string) => T
  textType: TextInputType
}

export type TextInputType =
  | 'text'
  | 'number'
  | 'tel'
  | 'email'
  | 'password'
  | 'date'
  | 'time'

export const stringType: FormInputType<string> = {
  toString: (x) => x,
  fromString: (x) => x,
  textType: 'text',
}

export const dateType: FormInputType<string> = {
  toString: (x) => x,
  fromString: (x) => x,
  textType: 'date',
}

export const timeType: FormInputType<string> = {
  toString: (x) => x,
  fromString: (x) => x,
  textType: 'time',
}

export const emailType: FormInputType<string> = {
  toString: (x) => x,
  fromString: (x) => x,
  textType: 'email',
}

export const phoneType: FormInputType<string> = {
  toString: (x) => x,
  fromString: (x) => x,
  textType: 'tel',
}
