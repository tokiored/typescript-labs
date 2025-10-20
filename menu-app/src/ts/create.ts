import { PizzaProps, Pizza } from './models/Pizza'

const form = document.querySelector('form.create') as HTMLFormElement

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = new FormData(form)
    const pizza: PizzaProps = {
        title: data.get('title') as string,
        description: data.get('title') as string,
        toppings: data.getAll('toppings') as string[],
        price: parseInt(data.get('price') as string),
    }
    const res = await Pizza.addOne(pizza)
    if (res.ok) {
        window.location.href = '/'
    } else console.log('Failed to save the pizza')
})
