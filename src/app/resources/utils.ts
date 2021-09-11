import {Member, TypeList} from './interfaces'

export class Utils {

  static generateTypes(data: Member[]): TypeList[] {
    let i = 0
    return data.reduce((acc: TypeList[], item: Member) => {
      if (!acc.map(type => type.name).includes(item.type)) {
        acc.push({name: item.type, id: i})
        i++
      }
      return acc
    }, [])
  }
}
