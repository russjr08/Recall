import Database from "./Database"
import { RouteComponentProps } from 'react-router-dom'


interface DatabaseProp {
    database: Database
}

export interface DatabaseRouteProp extends DatabaseProp, RouteComponentProps {

}

type ReportIdParam = { reportId: string }

export interface DatabaseWithIdRouteProp extends DatabaseProp, RouteComponentProps<ReportIdParam> {}

export default DatabaseProp
