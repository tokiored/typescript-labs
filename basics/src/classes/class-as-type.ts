/**
 *
 * class as type
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

function addMushroomsToAll(pizzas: Pizza[]) {
    for (const pizza of pizzas) {
        pizza.addToppings('Mushrooms')
    }
}

const blue = new Pizza('blue note', 15)
const atlantic = new Pizza('atlantic', 12)

const pizzas: Pizza[] = [blue, atlantic]
console.log(pizzas)

addMushroomsToAll(pizzas)
console.log(pizzas)
