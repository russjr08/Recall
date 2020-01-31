import Report from './models/Report'

interface Database {
    retrieveItems(callback: (items: Array<Report>) => void): void
    setItems(items: Array<Report>, callback?: () => void): void
    addItem(item: Report): void
    removeItem(id: string): void
}

export default Database