import React, { Component } from 'react';
import {
  IoMdArrowDropright,
  IoMdMail,
  IoMdPhonePortrait
} from 'react-icons/io';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { Photoshop, Illustrator, AfterEffects } from './assets/svg/SvgIcons.js';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Contact = class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: true };
  }

  arrowHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const turnClass = this.state.clicked ? 'arrow-turn' : '';
    return (
      <div className="mt-4">
        <a
          data-toggle="collapse"
          href="#contact"
          role="button"
          aria-expanded="true"
          aria-controls="contact"
          className="p-0 d-flex mx-0 align-items-center text-uppercase font-weight-light"
          onClick={this.arrowHandler}
        >
          <div className={`d-inline-block arrow ${turnClass}`}>
            <IoMdArrowDropright className="d-block" />
          </div>
          <h5 className="m-0 font-weight-bold">Contact</h5>
        </a>
        <ul
          className="list-group collapse multi-collapse show font-weight-light"
          id="contact"
        >
          <li className="list-group-item">
            <IoMdMail /> cyg65@foxmail.com
          </li>
          <li className="list-group-item">
            <IoMdPhonePortrait /> +81 80-9970-5532
          </li>
        </ul>
      </div>
    );
  }
};

export const Skills = class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  arrowHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ clicked: true });
    }, 600);
  }

  render() {
    let turnClass = this.state.clicked ? 'arrow-turn' : '';
    return (
      <div className="mt-4">
        <a
          data-toggle="collapse"
          href="#skills"
          role="button"
          aria-expanded="true"
          aria-controls="skills"
          className="p-0 d-flex mx-0 align-items-center text-uppercase font-weight-light"
          onClick={this.arrowHandler}
        >
          <div className={`d-inline-block arrow ${turnClass}`}>
            <IoMdArrowDropright className="d-block" />
          </div>
          <h5 className="m-0 font-weight-bold">Skills</h5>
        </a>
        <div className="mb-3 collapse show multi-collapse" id="skills">
          <ul className="list-group">
            <li className="list-group-item font-weight-light">
              Graphics Design
              <div className="d-flex mt-3">
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '95' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#00C8FF',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.95s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <Photoshop />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '90' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#FF7C00',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.9s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <Illustrator />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '75' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#D291FF',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.75s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <AfterEffects />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '70' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#777',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.70s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <p
                    style={{ fontSize: '0.7em' }}
                    className="position-absolute"
                  >
                    3D
                  </p>
                </div>
              </div>
              <div className="progress mt-2" style={{ height: 3 }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: this.state.clicked ? '40%' : '0',
                    transition: '0.4s'
                  }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
            <li className="list-group-item font-weight-light">
              Font-end Development
              <div className="d-flex mt-3">
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '95' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#f88',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.95s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <FaHtml5 className="position-absolute" color="#E34F26" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '95' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#1572B6',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.95s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <FaCss3Alt className="position-absolute" color="#1572B6" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '70' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#F7DF1E',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.70s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <FaJs className="position-absolute" color="#F7DF1E" />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center p-1"
                  style={{ width: '2em' }}
                >
                  <CircularProgressbar
                    initialAnimation={true}
                    percentage={this.state.clicked ? '75' : '0'}
                    strokeWidth={5}
                    styles={{
                      root: {},
                      path: {
                        stroke: '#61DAFB',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 0.75s ease 0s'
                      },
                      trail: {
                        stroke: 'transparent'
                      }
                    }}
                  />
                  <FaReact className="position-absolute" color="#61DAFB" />
                </div>
              </div>
              <div className="progress mt-2" style={{ height: 3 }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: this.state.clicked ? '70%' : '0',
                    transition: '0.7s'
                  }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
