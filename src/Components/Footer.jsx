import React from 'react'

const Footer = (darkMode) => {

    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <p className={ darkMode ? 'footer-dark' : 'footer-light' }>&copy; Powered by. David Diaz H | {currentYear}</p>
        </footer>
    )
}

export default Footer