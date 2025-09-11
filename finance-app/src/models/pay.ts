import { type HasFormatter } from '../interfaces/formatter.js'

export class Pay implements HasFormatter {
    constructor(
        readonly recipient: string,
        readonly details: string,
        private amount: number
    ) {}
    format() {
        return `${this.recipient} is expecting ${this.amount} for ${this.details}`
    }
}
