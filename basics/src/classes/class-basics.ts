/**
 *
 * class basics
 *
 */
type Base = 'classic' | 'tomatoe' | 'white'

class Pizza {
    title: string
    price: number
    base: Base = 'classic'
    toppings: string[] = []

    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }
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

const pizza = new Pizza('blue note', 15)
pizza.addToppings('mushrooms')
pizza.addToppings('pepper')
pizza.removeTopping('pepper')
console.log(pizza)
