import {Component, OnInit} from '@angular/core'
import {transactions} from '../../resources/transactions'
import {Card, Member, TypeList} from '../../resources/interfaces'
import {Utils} from '../../resources/utils'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})

export class SummaryComponent implements OnInit {
  transactionsTotal: number = transactions.total
  cards: Card[] = []
  types: TypeList[] = []

  constructor() {
  }

  ngOnInit() {
    this.types = Utils.generateTypes(transactions.data)

    this.cards = transactions.data.reduce((acc: Card[], item: Member) => {
      if (!acc.map(i => i.type).includes(item.type)) {
        acc.push(<Card>{type: item.type, typeId: this.types.find(i => i.name === item.type)?.id, number: 1})
      }
      else acc[acc.findIndex(i => i.type === item.type)].number++
      return acc
    }, [])
  }

}
