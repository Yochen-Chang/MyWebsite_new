// Step 1: Import React. This lets you use JSX inside your .js file.

import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";

/* Step 2: Define your component. Note that your component name should start with a capital letter. */

const MyComponent = () => {
    return (
        <div id="portfolio">
            <div className="title-header flexCCRow">
              <div className="line"></div>
              <p>My Portfolio</p>
              <div className="line"></div>
            </div>
            <div id="pf-cards" className="flexCCRow">
                <div className="pf-card normal-flex card">
                    <StaticImage
                      className=""
                      alt=""
                      src="../images/img/portfolio/Saicoreel/Main.png"
                    />
                    <h3>釣具用品網 - 重新設計</h3>
                    <p>
                    - 依據客戶行銷策略、喜好風格，進行設計<br />
                    - 優化資料呈現方式、頁面指向位置、RWD<br />
                    - 使用簡單架構、提供報告，以利更新與維護<br />
                    </p>
                    <div className="flexCCRow">
                    <button>More</button>
                        <a target="_blank" rel="noopener" href="http://www.jagon.com.tw/">
                        <button>Visit</button>
                        </a>
                    </div>
                </div>
              <div className="pf-card normal-flex card">
                <StaticImage
                  className=""
                  alt=""
                  src="../images/img/portfolio/Klotski/Klotski_show.png"
                />
                <h3>華容道 Klotski</h3>
                <p>
                  - JavaScript 控制方塊選擇、移動<br />
                  - 使用 Localstorage 紀錄遊戲<br />
                  - 設置更換外觀功能，自由切換<br />
                </p>
                <a target="_blank" href="https://sleepy-bhaskara-f50b90.netlify.app/"><button>Visit</button></a>
              </div>
              <div className="pf-card normal-flex card">
                <StaticImage
                  className=""
                  alt=""
                  src="../images/img/portfolio/Picsum/Main.png"
                />
                <h3>Picsum Project</h3>
                <p>
                  - 利用 Bootstrap 建立元素樣式<br />
                  - 通過 API 抓取 Picsum 圖片資訊<br />
                  - 進行 RWD 響應式網頁設計<br />
                </p>
                <a target="_blank" rel="noopener" href="./HTML2343-project_0918/index.html">
                <button>Visit</button>
                </a>
              </div>
              <div className="pf-card normal-flex card">
                <StaticImage
                  className=""
                  alt=""
                  src="../images/img/portfolio/breadshop/breadshop.png"
                />
                <h3>UI print: breadshop</h3>
                <p>
                  - 依據設計師稿件進行切版<br />
                  - 適當置放物件，防止跑版<br />
                  - 進行 RWD 響應式網頁設計<br />
                </p>
                <a target="_blank" rel="noopener" href="https://loving-archimedes-17098f.netlify.app/">
                  <button>Visit</button>
                  </a>
              </div>
              <div className="pf-card normal-flex card">
                <StaticImage
                  className=""
                  alt=""
                  src="../images/img/portfolio/counter/counter.png"
                />
                <h3>UI print: counter </h3>
                <p>
                  - 依據設計師稿件進行切版<br />
                  - 設計導引流程（sitemap）<br />
                  - 進行 RWD 響應式網頁設計<br />
                </p>
                <a target="_blank" rel="noopener" href="https://relaxed-davinci-079f7f.netlify.app/index.html">
                  <button>Visit</button>
                  </a>
              </div>
            <div id="pf-show">
              <div className="show-box flexCCRow hidden">
                <div className="show-title flexCCCol">
                  <h3>釣具用品網 - 重新設計</h3>
                  <div className="cross-box flexCCCol">
                    <div className="line"></div>
                  </div>
                  <div className="divider"></div>
                </div>
                <div className="show-content flexCCCol">
                  <div className="show-block show-70">
                    <div className="flowchat-box">
                      <h3>案前協商與討論：</h3>
                      <p><strong>目標：</strong>使網頁內容有效呈現，讓使用者清楚獲得產品相關資訊</p>
                      <p><strong>風格、用色：</strong>簡約風格，以黑白為主要用色</p>
                    </div>
                    <div className="flowchat-box">
                      <h3>介面設計、指向頁面：</h3>
                      <p>- 採用一頁式網頁，並將產品以卡片方式呈現（有效利用大量空間）</p>
                      <p>- 利用導覽列，快速移動到各區域（快速聚焦）</p>
                      <p>- 無複雜指向頁（僅首頁與產品頁面）</p>
                    </div>
                    <div className="flowchat-box">
                      <h3>Phototype展示：</h3>
                      <p>- 使用 Figma 展示網頁介面與指向頁面</p>
                    </div>
                    <div className="flowchat-box">
                      <h3>網站架設：</h3>
                      <p>- 利用簡單架構進行撰寫，易於日後更新與維護</p>
                      <p>- 使用 Bootstrap 及 jQuery 相關套件撰寫</p>
                    </div>
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />指向頁面扁平化，並利用導覽列快速導引至各區</h5>
                    <img src="./material/information/Saicoreel/Sitemap.png" className="show-70" alt="" />
                    <img src="./material/information/Saicoreel/SaicoReel sitemap-simple.png" className="show-70" alt="" />
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />空間規劃，增加可利用空間</h5>
                    <img src="./material/information/Saicoreel/inf-area.png" className="show-70" alt="" />
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />利用主次視圖及排版，有效呈現產品內容</h5>
                    <img src="./material/information/Saicoreel/product-page.png" className="show-70" alt="" />
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />卡片排版，大量展示產品資訊</h5>
                    <img src="./material/information/Saicoreel/product-show.png" className="show-50" alt="" />
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />新增輪播、最新消息區等廣告行銷區域</h5>
                    <img src="./material/information/Saicoreel/carousel-animation.gif" className="show-70" alt="" />
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />響應式網頁，偵測裝置改變排版</h5>
                    <img src="./material/information/Saicoreel/RWD.png" className="show-70" alt="" />
                  </div>
                  <div className="show-block">
                    <h5 className="flexCCRow">
                      <StaticImage
                          className=""
                          alt=""
                          src="/icons/design.png"
                        />提供維護更新報告，以利日後更新、維護</h5>
                    <img src="./material/information/Saicoreel/PPT.png" className="show-70" alt="" />
                  </div>
                </div>
                <a target="_blank" rel="noopener" href="http://www.jagon.com.tw/">
                  <button>
                    Visit the website
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div id="activity">
          </div>
        </div>
    )
}

/* Step 3: Export your component so it can be used by other parts of your app. */

export default MyComponent