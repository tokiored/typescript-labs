import CSVWriter from './csvWriter.js'

interface User {
    id: number
    name: string
    role: string
}
interface Payment {
    id: number
    to: string
    from: string
    description: string
    amount: number
}
const csvUser = new CSVWriter<User>(['id', 'name', 'role'])
const csvPayment = new CSVWriter<Payment>([
    'id',
    'to',
    'from',
    'description',
    'amount',
])
csvUser.addRows([
    {
        id: 1,
        name: 'Miles',
        role: 'Trumpet',
    },
    {
        id: 2,
        name: 'Parker',
        role: 'Saxaphone',
    },
    {
        id: 3,
        name: 'Coltrain',
        role: 'Saxaphone',
    },
])
csvPayment.addRows([
    {
        id: 1,
        to: 'miles',
        from: 'blue note',
        description: 'bitches brew',
        amount: 1000,
    },
    {
        id: 2,
        to: 'coltrain',
        from: 'atlantic',
        description: 'my favorite things',
        amount: 2000,
    },
    {
        id: 3,
        to: 'parker',
        from: 'savoy jazz',
        description: 'The Complete Savoy',
        amount: 9000,
    },
])
csvPayment.save('./data/payments.csv')
csvUser.save('./data/users.csv')
