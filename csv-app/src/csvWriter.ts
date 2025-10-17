import { appendFileSync } from 'fs'

export default class CSVWriter<T> {
    constructor(private header: (keyof T)[]) {
        this.body += header.join(',') + '\n'
    }

    private body: string = ''

    addRows(rows: T[]): void {
        this.body += rows.map((row) => this.formatRow(row)).join('\n')
    }
    private formatRow(row: T): string {
        return this.header.map((col) => row[col]).join(',')
    }
    print(): void {
        console.log(this.body)
    }
    save(filename: string): void {
        try {
            appendFileSync(filename, this.body)
            this.body = '\n'
            console.log('CSV saved successfully...')
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message)
            } else console.error('Save has failed', err)
        }
    }
}
