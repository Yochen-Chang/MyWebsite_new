// Step 1: Import React. This lets you use JSX inside your .js file.

import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";

/* Step 2: Define your component. Note that your component name should start with a capital letter. */

const MyComponent = () => {
    return ( 
        <div id="banner">
          <div id="banner-content">
            <StaticImage
                className="banner-image"
                alt="Daily UI Banner"
                src="../images/img/Banner-DailyUI.png"
            />
            <div id="banner-box" className="flexCCCol">
              <h3>Hello I'm Yochen</h3>
              <p>A Swing Website Designer</p>
            </div>
          </div>
        </div>
    )
}

/* Step 3: Export your component so it can be used by other parts of your app. */

export default MyComponent