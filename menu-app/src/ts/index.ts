import { Pizza, PizzaProps } from './models/Pizza'

const rootElement: Element = document.querySelector('.root')!

function createPizzaTemplate(pizza: PizzaProps): string {
    return `
        <div class="pizza">
            <h2>${pizza.title}</h2>
            <p class="toppings">${pizza.toppings.join(', ')}</p>
            <p>${pizza.description}</p>
            <span>£${pizza.price}</span>
        </div>
    `
}
function renderTemplate(templates: string[]) {
    const templateElement = document.createElement('template')
    for (const t of templates) templateElement.innerHTML += t

    rootElement.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {
    const pizzas = await Pizza.loadAll()
    /**
     *
     * ☝🏻 map() expects a callback function that takes the current element
     * as its first argument.
     *
     * pizzas.map((item) => createPizzaTemplate(item))
     * When you pass createPizzaTemplate directly, it’s equivalent to
     * wrapping it in an arrow function and calling it with that argument.
     *
     */
    const templates = pizzas.map(createPizzaTemplate)
    renderTemplate(templates)
})
