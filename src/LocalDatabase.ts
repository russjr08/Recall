import Database from './Database'
import Report from './models/Report'

class LocalDatabase implements Database {


    constructor() {
        this.entries = new Array<Report>()
        this.readFromLocalStorage()
    }

    entries: Array<Report>


    retrieveItems(callback: (items: Report[]) => void) {
        callback(this.entries)
    }

    setItems(items: Array<Report>) {
        this.entries = items
        this.serializeToStorage()
    }

    addItem(item: Report) {
        this.entries.push(item)
        this.serializeToStorage()
    }

    removeItem(id: string) {
        this.entries = this.entries.filter((value, index, array) => {
            return value.id !== id
        })

        this.serializeToStorage()
    }

    private readFromLocalStorage() {
        var storage = localStorage.getItem('reports')
        if(storage != null) {
            this.entries = JSON.parse(storage)
        }
    }

    private serializeToStorage() {
        localStorage.setItem('reports', JSON.stringify(this.entries))
    }


}

export default LocalDatabase