import React from "react"

import { DatabaseWithIdRouteProp } from '../DatabaseProp'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Calendar, { OnChangeDateCallback } from 'react-calendar'
import Button from 'react-bootstrap/Button'
import Report from '../models/Report'

class EditReport extends React.Component<DatabaseWithIdRouteProp> {

    state = {
        report: new Report()
    }

    onDateSelectionChanged: OnChangeDateCallback = (date: Date | Date[]) => {
        var report = this.state.report
        if(date instanceof Date) {
            report.due_date = date
            this.setState({report: report})
            console.log(date)
        }
    }

    componentWillMount() {
        var reportId = this.props.match.params.reportId
        
        var database = this.props.database
        database.getItemWithId(reportId, (report: Report) => {
            this.setState({report: report})
        })

        
    }

    updateReportAcctId(account_id: string) {
        var report = this.state.report
        report.account_id = account_id
        this.setState({report: report})
    }

    updateReportNotes(notes: string) {
        var report = this.state.report
        report.notes = notes
        this.setState({report: report})
    }

    render() {
        return (
            <div className="pt-4">
                <h2 className="align-center pb-2">Editing Report (For {this.state.report.account_id})</h2>
                <InputGroup className="pb-4">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Account ID / BTN</InputGroup.Text>
                    </InputGroup.Prepend>

                    <div>
                        <FormControl value={this.state.report.account_id} onChange={(event: any) => this.updateReportAcctId(event.target.value)} placeholder="Account ID" />
                    </div>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Notes</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={this.state.report.notes} onChange={(event: any) => this.updateReportNotes(event.target.value)} className="margin-right-30" as="textarea" style={{height: 300}} placeholder="Insert notes here" />
                </InputGroup>

                <div className="calendar-margin">
                    <p>Select A Due Date:</p>
                    <hr/>
                    <Calendar minDate={new Date()} maxDate={this.getDateFromToday()} onChange={this.onDateSelectionChanged}/>
                </div>

                <hr/>
                <Button variant="success" onClick={() => this.submitReport()}>Save Changes</Button>
                <Button variant="danger" className='float-right' onClick={() => this.props.history.push('/')}>Cancel</Button>

            </div>
        )
    }

    submitReport() {
        this.props.database.setItem(this.state.report.id, this.state.report, () => {
            this.props.history.push('/')
        })
    }

    getDateFromToday(): Date {
        var yearFromNow = new Date()
        yearFromNow.setFullYear(yearFromNow.getFullYear() + 1)
        return yearFromNow
    }

}

export default EditReport