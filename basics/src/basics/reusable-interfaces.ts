/**
 *
 * reusable interfaces
 *
 */
interface HasQuantity {
    quantity: number
}
const apple = {
    type: 'apple',
    quantity: 11,
}
const orange = {
    name: 'orange',
    quantity: 22,
    color: 'red',
}
const pear = {
    type: 'pear',
    total: 10,
}

function printQuantity(fruit: HasQuantity) {
    console.log(`This fruit has a quantity of ${fruit.quantity}`)
}

printQuantity(apple)
printQuantity(orange)
printQuantity(pear)

// object literals may only specify known properties
printQuantity({ quantity: 11, type: 'grape' })
