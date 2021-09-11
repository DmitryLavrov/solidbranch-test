import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {Member, TabList, TypeList} from '../../resources/interfaces'
import {transactions} from '../../resources/transactions'
import {Utils} from '../../resources/utils'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {

  types: TypeList[] = []
  typeId: number = 0
  currentType: string | undefined = ''
  tabList: TabList[] = []
  sub!: Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.types = Utils.generateTypes(transactions.data)

    this.sub = this.activatedRoute.queryParams.subscribe((params) => {
      if (!params.tab) this.router.navigate(['/navigator'], {queryParams: {tab: '0'}})

      this.typeId = +params.tab || 0

      this.currentType = this.types.find(type => type.id === this.typeId)?.name

      this.tabList = transactions.data.reduce((acc: TabList[], item: Member) => {
        if (item.type === this.currentType) {
          acc.push({name: `${item.name.first} ${item.name.last}`, company: item.company})
        }
        return acc
      }, [])
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
