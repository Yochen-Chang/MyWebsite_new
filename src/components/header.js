// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link } from 'gatsby'
import '../style/navigation.scss'
/* Step 2: Define your component. Note that your component name should start with a capital letter. */

const Header = () => {
return ( 
    <>
    <h1 className="site-brand-title">🕺🏾會搖擺的網頁工程師👨🏻‍💻</h1>
    <nav>
        <ul>
        <li className="active">
            <Link
                to="/"
                target="_blank"
                className="flexCCRow"
                >
                Home
            </Link>
        </li>
        <li className="sub-active">
            <Link
                to="/#portfolio"
                target="_blank"
                className="flexCCRow"
                >
                Portfolio
            </Link>
        </li>
        <li className="sub-active">
            <Link
                to="/#contact-me"
                target="_blank"
                className="flexCCRow"
                >
                Contact Me
            </Link>
        </li>
        <li>
            <Link
                to="/introduction"
                target="_blank"
                className="flexCCRow"
                >
                Introduction
            </Link>
        </li>
        <li>
            <Link
                to="/experience"
                target="_blank"
                className="flexCCRow"
                >
                Experience
            </Link>
        </li>
        </ul>
    </nav>
    </> 
)}

/* Step 3: Export your component so it can be used by other parts of your app. */

export default Header