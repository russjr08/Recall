import React from 'react'

import { DatabaseRouteProp } from '../DatabaseProp'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import Calendar, { OnChangeDateCallback } from 'react-calendar'
import Button from 'react-bootstrap/Button'
import Report from '../models/Report'



class CreateReport extends React.Component<DatabaseRouteProp> {

    state = {
        selected_date: new Date(),
        account_id: "",
        notes: ""
    }

    onDateSelectionChanged: OnChangeDateCallback = (date: Date | Date[]) => {
        this.setState({selected_date: date})
        console.log(date)
    }

    render() {
        return (
            <div className="pt-4">
                <h2 className="align-center pb-2">Create A Report</h2>
                <InputGroup className="pb-4">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Account ID / BTN</InputGroup.Text>
                    </InputGroup.Prepend>

                    <div>
                        <FormControl onChange={(event: any) => this.setState({account_id: event.target.value})} placeholder="Account ID" />
                    </div>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Notes</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={(event: any) => this.setState({notes: event.target.value})} className="margin-right-30" as="textarea" style={{height: 300}} placeholder="Insert notes here" />
                </InputGroup>

                <div className="calendar-margin">
                    <p>Select A Due Date:</p>
                    <hr/>
                    <Calendar minDate={new Date()} onChange={this.onDateSelectionChanged}/>
                </div>

                <hr/>
                <Button variant="success" onClick={() => this.submitReport()}>Submit</Button>
                <Button variant="danger" className='float-right' onClick={() => this.props.history.push('/')}>Cancel</Button>

            </div>
        )
    }

    submitReport() {
        var report = new Report()
        var database = this.props.database
        report.account_id = this.state.account_id
        report.notes = this.state.notes
        report.due_date = this.state.selected_date

        console.log(`Submitting Report: ${report.id}`)
        console.log(`Report data: `, report)
        database.addItem(report, () => {
            this.props.history.push('/')
        })
    }

}


export default CreateReport