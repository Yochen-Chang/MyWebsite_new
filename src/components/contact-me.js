// Step 1: Import React. This lets you use JSX inside your .js file.

import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";

/* Step 2: Define your component. Note that your component name should start with a capital letter. */

const MyComponent = () => {
return ( 
    <footer>
        <div class="container">
          <div class="title-header flexCCRow" id="contact-me">
            <div class="line"></div>
            <p>Contact Me</p>
            <div class="line"></div>
          </div>
          <div id="contact" class="flexCCRow">
            <form action="/Router" method="POST" class="flexCCCol" id="contact-form">
              <label for="username">NAME</label>
              <input type="text" placeholder="Enter your name" name="userName" id="userName" required="" />
              <label for="email">EMAIL</label>
              <input type="email" placeholder="Enter your email" name="userEmail" id="userEmail" required="" />
              <label for="message">MESSAGE</label>
              <textarea name="userMessage" id="userMessage" cols="30" rows="10" required=""></textarea>
              <button id="submit-btn">SEND MESSAGE</button>
            </form>
          <div id="information" class="flexCCCol">
            <div class="info">
              <a href="mailto:hi.changyc@gmail.com" class="flexCCRow">
                <StaticImage
                    className=""
                    alt=""
                    src="../images/icons/email_black_24dp.svg"
                    />
                <p>Sent Me a Email</p></a>
            </div>
            <div class="info">
              <a href="https://www.linkedin.com/in/yu-cheng-chang-ba1872175/" class="flexCCRow">
                <StaticImage
                        className=""
                        alt=""
                        src="../images/icons/linkedin-logo-black.svg"
                        />
                <p>Know Me on Linkedin</p></a>
            </div>
            <div class="info">
              <a href="https://www.facebook.com/profile.php?id=100000333750833" class="flexCCRow">
                <StaticImage
                    className=""
                    alt=""
                    src="../images/icons/facebook-logo-black.svg"
                    />
                <p>
                  Contact Me by messenger
                </p></a>
            </div>
            <div class="info">
              <a href="https://www.instagram.com/hiyochen/" class="flexCCRow">
                <StaticImage
                    className=""
                    alt=""
                    src="../images/icons/instagram-logo-black.svg"
                    />
                <p>My Life Recording</p></a>
            </div>
          </div>
          </div>
        </div>
      </footer>
    )
}

/* Step 3: Export your component so it can be used by other parts of your app. */

export default MyComponent