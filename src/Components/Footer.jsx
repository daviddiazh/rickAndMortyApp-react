import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className='footer-dark'>
            <p>&copy; Powered by. David Diaz H | {currentYear}.</p>
        </footer>
    )
}

export default Footer