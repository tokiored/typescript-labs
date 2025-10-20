export class DataResource<T> {
    constructor(private endpoint: string) {}

    async loadOne(id: number): Promise<T> {
        const res = await fetch(`${this.endpoint}/${id}`)
        return res.json()
    }
    async loadAll(): Promise<T[]> {
        const res = await fetch(this.endpoint)
        return res.json()
    }
    async addOne(item: T): Promise<Response> {
        const options = {
            'Content-Type': 'application/json',
            method: 'post',
            body: JSON.stringify(item),
        }
        return await fetch(this.endpoint, options)
    }
    async delete(id: number): Promise<Response> {
        return await fetch(`${this.endpoint}/${id}`, { method: 'delete' })
    }
}
