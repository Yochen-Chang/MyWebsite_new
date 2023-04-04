// Modules
import * as React from 'react'

// Component
import Header from "./header"

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
            <main>
                {children}
            </main>``
            <footer></footer>
        </div>
    )
}

export default Layout;