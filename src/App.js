import React, { Component } from 'react';
import $ from 'jquery';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  IoMdArrowDropright,
  IoMdMail,
  IoMdPhonePortrait
} from 'react-icons/io';
import { findDOMNode } from 'react-dom';
import './App.css';

class App extends Component {
  turnArrow = () => {
    const el = findDOMNode(this.refs.turn);
    $(el).toggleClass('arrow-turn');
  };

  render() {
    return (
      <div className="container-fluid main d-flex row m-auto text-black-50">
        <div className="container col-sm-12 col-lg-4 m-0 mt-5">
          <div className="display-4">
            <b>SHION KOU</b>
          </div>
          <div>Experience Designer</div>
          <p className="mt-3">
            I am a product/UX/web designer based in Tokyo. I am passionate for
            all things technology, creative.
          </p>
          <hr className="my-4" />

          <a
            data-toggle="collapse"
            href="#contact"
            role="button"
            aria-expanded="false"
            aria-controls="contact"
            className="p-0 d-flex mx-0 align-items-center font-weight-bold"
            onClick={this.turnArrow}
          >
            <div className="d-inline-block arrow" ref="turn">
              <IoMdArrowDropright className="d-block" />
            </div>
            Contact
          </a>
          <ul className="mb-3 collapse multi-collapse" id="contact">
            <li className="list-unstyled">
              <IoMdMail /> cyg65@foxmail.com
            </li>
            <li className="list-unstyled">
              <IoMdPhonePortrait /> +81 80-9970-5532
            </li>
          </ul>
        </div>

        <div className="container col-sm-12 col-lg-8 m-0 d-flex row mt-5 right">
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
                <h5 className="card-title">[WIP]Kumano Fude: Shiki</h5>
                <div className="card-text">
                  <ul>
                    <li>Prototype: 3D (Cinema4d)</li>
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
                <h5 className="card-title">Kumano Fude: Konayuki</h5>
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
                <h5 className="card-title">[WIP]T-shirts: Lollilip</h5>
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
                <h5 className="card-title">Kumano Fude: Yoshiki</h5>
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
                <h5 className="card-title">[WIP]Branding: ChaDJ</h5>
                <div className="card-text">
                  <ul>
                    <li>Layout design: Sketch</li>
                    <li>Landing Page: HTMLCSS + Bootstrap + JS</li>
                    <li>Logo Design: Illustrator</li>
                  </ul>
                  <p>
                    In collaboration with © 2010 Neowing. All Rights Reserved.
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
                <h5 className="card-title">Branding: CDJ Productions </h5>
                <div className="card-text">
                  <ul>
                    <li>Logo Design: Illustrator</li>
                    <li>Video: After Effects</li>
                  </ul>
                  <p>
                    In collaboration with © 2010 Neowing. All Rights Reserved.
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
                <h5 className="card-title">JS Sidebar Widget</h5>
                <div className="card-text">
                  <ul>
                    <li>Perl+JS</li>
                  </ul>
                  <p>
                    In collaboration with © 2010 Neowing. All Rights Reserved.
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
                <h5 className="card-title">[WIP]Proxy Japan Mobile APP</h5>
                <div className="card-text">
                  <ul>
                    <li>Logo Design: Illustrator</li>
                    <li>Layout Design: Illustrator</li>
                    <li>React Native</li>
                  </ul>
                  <p>
                    In collaboration with © 2010 Neowing. All Rights Reserved.
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
