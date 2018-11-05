export interface Data {
  [s: string]: any
}

export interface Row {
  name: string
  data: Data
  checked?: boolean
}

export interface TableState {
  rows?: Row[]
  defaultChecked?: boolean
  totals?: Data
  columns: string[]
}