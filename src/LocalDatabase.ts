import Database from './Database'
import Report from './models/Report'

class LocalDatabase implements Database {


    subscribe(callback: () => void): void {
        this.subscribers.push(callback)
    }


    constructor() {
        this.entries = new Array<Report>()
        this.subscribers = new Array<() => void>()
        this.readFromLocalStorage()
    }

    entries: Array<Report>
    subscribers: Array<() => void>

    retrieveItems(callback: (items: Report[]) => void) {
        callback(this.entries)
    }

    setItems(items: Array<Report>) {
        this.entries = items
        this.serializeToStorage()
        this.notifySubscribersOfUpdate()
    }

    addItem(item: Report, callback?: () => void) {
        this.entries.push(item)
        this.serializeToStorage()
        if(callback) {
            callback()
        }
        this.notifySubscribersOfUpdate()
    }

    removeItem(id: string) {
        this.entries = this.entries.filter((value, index, array) => {
            return value.id !== id
        })

        this.serializeToStorage()
        this.notifySubscribersOfUpdate()
    }

    private readFromLocalStorage() {
        var storage = localStorage.getItem('reports')
        if(storage != null) {
            this.entries = JSON.parse(storage)
        }
        // Convert unix timestamps back to a date object upon deserialization
        for(var i = 0; i < this.entries.length; i++) {
            this.entries[i].due_date = new Date(this.entries[i].due_date)
        }
    }

    private serializeToStorage() {
        localStorage.setItem('reports', JSON.stringify(this.entries))
    }

    // Allows 'subscribers' to be notified that something within the database changed. 
    private notifySubscribersOfUpdate() {
        for(var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i]()
        }
    }


}

export default LocalDatabase