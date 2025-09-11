import { Bill } from './models/bill.js'
import { Pay } from './models/pay.js'
import { type HasFormatter } from './interfaces/formatter.js'
import { List } from './models/list.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ul = document.querySelector('ul.item-list') as HTMLUListElement
const list = new List(ul)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let doc: HasFormatter
    const values: [string, string, number] = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ]
    if (type.value === 'invoice') {
        doc = new Bill(...values)
    } else doc = new Pay(...values)

    list.render(doc, type.value, 'end')
})
