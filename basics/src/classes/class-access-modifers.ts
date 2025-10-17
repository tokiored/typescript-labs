/**
 *
 * class access modifiers
 *
 */
type Base = 'classic' | 'tomatoe' | 'white'

class Pizza {
    constructor(
        private title: string,
        private price: number
    ) {}

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

const pizza = new Pizza('blue note', 15)
pizza.addToppings('mushrooms')
pizza.addToppings('olive')
console.log(pizza)

pizza.removeTopping('olive')
console.log(pizza)
