import uuid from 'uuid/v1'

class Report {

    id: string
    notes: string
    account_id: string
    due_date: Date

    constructor() {
        this.id = uuid()
        this.notes = ""
        this.account_id = ""
        this.due_date = new Date()
    }

}

export default Report