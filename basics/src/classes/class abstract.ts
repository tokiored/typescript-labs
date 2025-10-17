/**
 *
 * class abstract
 *
 * note: you cannot create an instance of an abstract class
 * its expected to be used as a base to be extended
 * by other classes
 */
type Base = 'classic' | 'tomatoe' | 'white'

interface HasFormatter {
    format(): void
}

abstract class MenuItem implements HasFormatter {
    constructor(
        private title: string,
        private price: number
    ) {}

    get details(): string {
        return `A ${this.title} pizza costs £${this.price}`
    }

    abstract format(): string
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
    format(): string {
        let formatted = `${this.details} \n`
        formatted += `This pizza has a ${this.base} base `
        formatted += this.toppings.length
            ? `with ${this.toppings.join(', ')}`
            : 'with no toppings'
        return formatted
    }
}

function printPizza(pizza: HasFormatter) {
    console.log(pizza.format())
}

const blue = new Pizza('blue note', 15)
blue.addToppings('mushrooms')
blue.addToppings('peppers')
printPizza(blue)
