import Database from "./Database"
import { RouteComponentProps } from 'react-router-dom'


interface DatabaseProp {
    database: Database
}

export interface DatabaseRouteProp extends DatabaseProp, RouteComponentProps {

}

export default DatabaseProp
