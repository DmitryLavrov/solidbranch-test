export interface Transactions {
  total: number,
  data: Member[]
}

export interface Member {
  _id: string,
  amount: string,
  type: string,
  name: Name,
  company: string,
  email: string,
  phone: string,
  address: string
}

interface Name {
  first: string,
  last: string
}

export interface Card {
  type: string,
  typeId: number,
  number: number
}

export interface TabList {
  name: string,
  company: string
}

export interface TypeList {
  id: number,
  name: string
}
