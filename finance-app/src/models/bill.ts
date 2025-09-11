import { type HasFormatter } from '../interfaces/formatter.js'

export class Bill implements HasFormatter {
    constructor(
        readonly client: string,
        readonly details: string,
        private amount: number
    ) {}
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
