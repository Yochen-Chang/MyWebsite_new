// Modules
import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

// Component

// Style

const Intro = () => {
    return (
        <div id="intro" className="flexCCCol">
            <h1 className="myH1">What I have...</h1>
            <div id="intro-cards" className="flexCCRow">
            <div className="intro-card card op-0 animationFadeIn15">
                <StaticImage
                className="intro-image"
                alt="Protograph image"
                src="../images/img/LayOut.png"
                />
                <div className="intro-content">
                <h3>Protograph</h3>
                <p></p>
                <ul>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Photoshop</li>
                    <li>illustrator</li>
                </ul>
                <p></p>
                </div>
            </div>
            <div className="intro-card card op-0 animationFadeIn30">
                <StaticImage
                className="intro-image"
                alt="WebDesign image"
                src="../images/img/Programing.png"
                />
                <div className="intro-content">
                <h3>WebDesign</h3>
                <p></p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>　</li>
                </ul>
                <p></p>
                </div>
            </div>
            <div className="intro-card card op-0 animationFadeIn45">
                <StaticImage
                className="intro-image"
                alt="FrameWork image"
                src="../images/img/FrameWork.png"
                />
                <div className="intro-content">
                <h3>FrameWork</h3>
                <p></p>
                <ul>
                    <li>Node.js</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                </ul>
                <p></p>
                </div>
            </div>
            </div>
            <StaticImage
            className="intro-image"
            alt="All image"
            src="../images/img/Intro-All.png"
            />
            <button id="license-btn">My License</button>
            <div id="license-area" className="collapsed">
            <ul>
                <li>
                <Link to="../files/NTU_license_342.pdf">
                    台大資訊系統訓練班 - HTML5, CSS3, jQuery, Bootstrap
                    網頁設計基礎班
                </Link>
                </li>
                <li>
                <Link to="../files/NTU_license_342.pdf">
                    台大資訊系統訓練班 - HTML5, CSS3, jQuery, Bootstrap
                    網頁設計進階班
                </Link>
                </li>
                <li>
                <Link to="../files/Udemy_license_front-end&amp;back-end.pdf">
                    Udemy - 2021網站開發全攻略(HTML, CSS, JavaScript, React, SQL,
                    Node, more)
                </Link>
                </li>
                <li>
                <Link to="../files/Udemy_license_JavaScript.pdf">
                    Udemy - JavaScript全攻略: 克服JS的奇怪部分
                </Link>
                </li>
            </ul>
            <div id="licenses" className="flexCCCol">
                <Link
                to="../files/NTU-license-basic-CH.pdf"
                target="_blank"
                className="flexCCRow"
                >
                網頁設計-初階
                </Link>
                <Link
                to="../files/NTU-license-advanced-CH.pdf"
                target="_blank"
                className="flexCCRow"
                >
                網頁設計-進階
                </Link>
                <Link
                to="../files/Udemy_license_front-end&amp;back-end.pdf"
                target="_blank"
                className="flexCCRow"
                >
                網頁全端設計
                </Link>
                <Link
                to="../files/Udemy_license_JavaScript.pdf"
                target="_blank"
                className="flexCCRow"
                >
                JavaScript
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Intro;