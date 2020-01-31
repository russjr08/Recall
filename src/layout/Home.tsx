import React from 'react'

import DatabaseProp from '../DatabaseProp'
import Report from '../models/Report'
import Util from '../util/Util'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'




class Home extends React.Component<DatabaseProp> {
    render() {
        var items = new Array<Report>()
        this.props.database.retrieveItems((retrieved) => {
            items = retrieved
        })

        return (
            <div>
                <div className="p-1 text-center">
                    <p>Welcome!</p>
                    <h4>You have {items.length} {Util.quantify_string('report', items.length)} to review!</h4>
                    <i>{this.getReportsDueToday()} {Util.quantify_string('report', this.getReportsDueToday())} are due for review today</i>
                </div>
                <div className="p-2 align-right">
                <Link to="/reports/create"><Button variant="primary">Add Report</Button></Link>
                </div>
                <ReportsTable database={this.props.database} />
            </div>
        )
    }

    updateTitle() {
        this.props.database.retrieveItems((items) => {
            document.title = `Recall Reports || ${items.length} ${Util.quantify_string('Report', items.length)}`
        })
    }

    getReportsDueToday() {
        var dueToday = 0
        this.props.database.retrieveItems((items) => {
            items.forEach((item: Report) => {
                if(Util.isToday(item.due_date)) {
                    dueToday++
                }
            })
        })

        return dueToday
    }

    componentDidUpdate() {
        this.updateTitle()
    }

    componentDidMount() {
        this.updateTitle()
    }
}

class ReportsTable extends React.Component<DatabaseProp> {
    render() {
        return (
            <div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Account</th>
                            <th>Notes</th>
                            <th>Due Date</th>
                            <th>Remove?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableItems()}
                    </tbody>
                </Table>
            </div>
        )
    }

    renderTableItems() {
        var elements: JSX.Element[] = []
        this.props.database.retrieveItems((items: Array<Report>) => {
            items.sort(this.sortReportsByDueDate)
            items.forEach((item: Report) => {
            elements.push(
                <tr key={item.id}>
                    <td>{item.account_id}</td>
                    <td>{item.notes}</td>
                    <td>{item.due_date.toDateString()}</td>
                    <td><Button variant="danger" onClick={() => this.removeItemSelected(item.id)}>Remove</Button></td>
                </tr>
            )
           })
        })

        return elements
    }

    sortReportsByDueDate: (a: Report, b: Report) => number =
    function(a: Report, b: Report): number { 
        if(a.due_date > b.due_date) {
            return 1
        } else if(a.due_date < b.due_date) {
            return -1
        } else {
            return 0
        }
    };

    removeItemSelected(item_id: string) {
        this.props.database.removeItem(item_id)
        console.log(`Removing report with ID ${item_id}`)
    }

}

export default Home