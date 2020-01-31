import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Link to="/"><Navbar.Brand>Recall Reports</Navbar.Brand></Link>
            </Navbar>
        </div>
    )
}

export default Header