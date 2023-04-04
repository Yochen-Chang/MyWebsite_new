// Modules
import * as React from 'react'

// Component
import Header from "./header"
import ContactMe from "./contact-me"

// Style
import "../style/initial.scss"
import "../style/variable.scss"
import "../style/index.scss"

const Layout = ({ pageClass, children }) => {
    return (
        <div className={pageClass}>
            <header>
                <Header />
            </header>
            <main className='desktopFont'>
                {children}
            </main>
            <footer>
            <ContactMe></ContactMe>
            </footer>
        </div>
    )
}

export default Layout;