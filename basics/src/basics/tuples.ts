/**
 *
 * tuples
 *
 */
const rgba: [number, number, number, string] = [255, 255, 255, '50%']
/**
 *
 * named tuples
 *
 */
let coords: [latitude: number, longitude: number]
coords = [53.1123, 32.2222]

const formatCoords = (pin: [latitude: number, longitude: number]): string =>
    `lat: ${coords[0]} and lng: ${coords[1]}`

const getCoords = (): [number, number] => {
    const lat = 1.2233434
    const lng = 41.2233434

    return [lat, lng]
}
console.log(getCoords())
console.log(formatCoords(coords))
