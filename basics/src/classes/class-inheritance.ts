/**
 *
 * class inheritance
 *
 */
type Base = 'classic' | 'tomatoe' | 'white'

class MenuItem {
    constructor(
        private title: string,
        private price: number
    ) {}

    print(): void {
        console.log(`Your pizza '${this.title}' costs £${this.price}`)
    }

    get details(): string {
        return `Your pizza '${this.title}' costs £${this.price}`
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
blue.print()

function printDetails(pizza: MenuItem) {
    // `get` accessor acts like a property
    console.log(pizza.details)
}
printDetails(blue)
