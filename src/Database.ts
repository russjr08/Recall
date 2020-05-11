import Report from './models/Report'

interface Database {
    retrieveItems(callback: (items: Array<Report>) => void): void
    setItems(items: Array<Report>, callback?: () => void): void
    setItem(reportId: string, report: Report, callback?: () => void): void
    getItemWithId(reportId: string, callback: (report: Report) => void): void
    addItem(item: Report, callback?: () => void): void
    removeItem(id: string): void
    subscribe(callback: () => void): void
}

export default Database