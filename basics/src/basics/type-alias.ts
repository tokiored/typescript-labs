/**
 *
 * type alias
 *
 */
type Artist = {
    name: string
    instrument: string
    isVisible: true
}

const member: Artist = {
    name: 'Miles',
    instrument: 'trumpet',
    isVisible: true,
}

type Rgb = [number, number, number]

const randomColor = (): Rgb => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return [r, g, b]
}
const formatColor = (color: Rgb): string =>
    `Your choosen color was ${color[0]}, ${color[1]}, ${color[2]}`

const color = randomColor()
console.log(color, formatColor(color))
