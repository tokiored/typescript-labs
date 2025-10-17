/**
 *
 * class with interface
 *
 */
type Base = 'classic' | 'tomatoe' | 'white'

interface HasFormatter {
    format(): void
}

class MenuItem implements HasFormatter {
    constructor(
        private title: string,
        private price: number
    ) {}
    get details(): string {
        return `Title: '${this.title}', Price: £${this.price}`
    }
    format(): string {
        return `Your pizza is '${this.title}' and costs £${this.price}`
    }
}
class Pizza extends MenuItem {
    constructor(title: string, price: number) {
        super(title, price)
    }
    private base: Base = 'classic'
    private toppings: string[] = []

    selectBase(item: Base): void {
        this.base = item
    }
    addToppings(item: string): void {
        this.toppings.push(item)
    }
    removeTopping(item: string): void {
        this.toppings = this.toppings.filter((a) => a !== item)
    }
}

const blue = new Pizza('blue note', 15)
console.log(blue.format())
