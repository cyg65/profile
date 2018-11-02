import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Contact, Skills } from './Summary';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid main d-flex row ml-0 mr-auto text-black-50 p-0">
        <div className="container col-sm-12 col-md-4 m-0 p-5">
          <h1 className="font-weight-bold">SHION KOU</h1>
          <h5 className="mt-4 font-weight-light">EXPERIENCE DESIGNER</h5>
          <p className="mt-5 text-justify">
            I am a product/UX/web designer based in Tokyo. I am passionate for
            all things technology & creative. My experiences takes me
            all-around-the-world, fillfulling different roles in marketing,
            branding & design.
          </p>
          <hr className="my-5" />
          <Contact />
          <Skills />
        </div>

        <div className="container col-sm-12 col-md-8 m-0 d-flex row p-5 right">
          <div className="content card-columns">
            <a
              href="https://cyg65.github.io/kisetsu_2018/"
              target="_blank"
              rel="noopener noreferrer"
              className="card mb-5"
            >
              <img
                className="card-img-top"
                src={require('./assets/Kisetsu.png')}
                alt="Kumano Fude: Shiki"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold text-uppercase">
                  [WIP]Kumano Fude: Shiki
                </h4>
                <div className="card-text">
                  <ul>
                    <li>3D Modeling: Cinema4d</li>
                    <li>Video: Cinema4D + After Effects</li>
                    <li>Landing Page: HTMLCSS+Jquery</li>
                    <li>Design: Cinema4d + Illustrator</li>
                  </ul>
                  <p>
                    In collaboration with © 2003-2018 Neowing. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="http://www.cdjapan.co.jp/beauty/kisetsu2017_konayuki_en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="card mb-5"
            >
              <img
                className="card-img-top"
                src={require('./assets/Konayuki.png')}
                alt="Kumano Fude: Konayuki"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  Kumano Fude: Konayuki
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Video: After Effects + Premiere Pro</li>
                    <li>Landing Page: HTMLCSS + W3-Templete + JS</li>
                    <li>Design: Photoshop + Illustrator</li>
                  </ul>
                  <p>
                    In collaboration with (Designer) Shawn Han, © 2003-2018
                    Neowing. All Rights Reserved.
                  </p>
                </div>
              </div>
            </a>
            <div className="card mb-5">
              <img
                className="card-img-top"
                src={require('./assets/lollilip_thumb.jpg')}
                alt="T-shirts: Lollilip"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  [WIP]T-shirts: Lollilip
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Design: Photoshop + Illustrator</li>
                  </ul>
                  <p>
                    In collaboration with (Illustrator) Shen Lee, © 2003-2018
                    Lollilip China Ltd. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="http://www.cdjapan.co.jp/beauty/yoshiki.html"
              className="card mb-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img-top"
                src={require('./assets/Yoshiki.png')}
                alt="Kumano Fude: Yoshiki"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  Kumano Fude: Yoshiki
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Photography Direction</li>
                    <li>Landing Page: HTMLCSS + W3-Templete + JS</li>
                    <li>Design: Photoshop + Illustrator</li>
                  </ul>
                  <p>
                    In collaboration with © 2010 Koyudo All Rights Reserved.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://cyg65.github.io/ChaDJ_LP_MKI/"
              className="card mb-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img-top"
                src={require('./assets/ChaDJ.png')}
                alt="ChaDJ"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  [WIP]Branding: ChaDJ
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Layout design: Sketch</li>
                    <li>Landing Page: HTMLCSS + Bootstrap + JS</li>
                    <li>Logo Design: Illustrator</li>
                  </ul>
                  <p>
                    In collaboration with © 2003-2018 Neowing. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </a>
            <div
              className="card mb-5"
              data-toggle="modal"
              data-target="#cdj_production_demo"
            >
              <img
                className="card-img-top"
                src={require('./assets/Cdj_Production_logo.png')}
                alt="cdj productions"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  Branding: CDJ Productions
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Logo Design: Illustrator</li>
                    <li>Video: After Effects</li>
                  </ul>
                  <p>
                    In collaboration with © 2003-2018 Neowing. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <img
                title="demogif"
                src={require('./assets/js_demo.gif')}
                width="220"
                className="card-img-top"
                alt="js_demo"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  JS Sidebar Widget
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Perl+JS</li>
                  </ul>
                  <p>
                    In collaboration with © 2003-2018 Neowing. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mb-5">
              <img
                src={require('./assets/ProxyJapan.gif')}
                width="220"
                className="card-img-top"
                alt="react native demo"
              />
              <div className="card-body">
                <h4 className="card-title font-weight-bold">
                  [WIP]Proxy Japan Mobile APP
                </h4>
                <div className="card-text">
                  <ul>
                    <li>Logo Design: Illustrator</li>
                    <li>Layout Design: Illustrator</li>
                    <li>React Native</li>
                  </ul>
                  <p>
                    In collaboration with © 2003-2018 Neowing. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="cdj_production_demo"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="cdjProductionDemo-video"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content rounded-0">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="text-white" aria-hidden="true">
                      &times;
                    </span>
                  </button>

                  <div className="modal-body">
                    <video
                      controls
                      src={require('./assets/cdj_productions_title.mp4')}
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <BrowserRouter>
          <Navigation />
          <Switch>
            <Route />
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
