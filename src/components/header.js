// Step 1: Import React. This lets you use JSX inside your .js file.

import * as React from 'react'
import '../style/navigation.scss'
/* Step 2: Define your component. Note that your component name should start with a capital letter. */

const Header = () => {
return ( 
    <>
    <h1 class="site-brand-title">🕺🏾會搖擺的工程師👨🏻‍💻</h1>
    <ul class="navigation">
        <li class="navigation-button">Home</li>
        <li class="navigation-button only-show show-at-home">Portfolio</li>
        <li class="navigation-button only-show show-at-home">Contact Me</li>
        <li class="navigation-button">Introduction</li>
        <li class="navigation-button">Experience</li>
    </ul>
    </> 
)}

/* Step 3: Export your component so it can be used by other parts of your app. */

export default Header