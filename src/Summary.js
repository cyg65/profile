import React, { Component } from 'react';
import {
  IoMdArrowDropright,
  IoMdMail,
  IoMdPhonePortrait
} from 'react-icons/io';

export const Contact = class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  arrowHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const turnClass = this.state.clicked ? 'arrow-turn' : '';
    return (
      <div>
        <a
          data-toggle="collapse"
          href="#contact"
          role="button"
          aria-expanded="false"
          aria-controls="contact"
          className="p-0 d-flex mx-0 align-items-center text-uppercase font-weight-light"
          onClick={this.arrowHandler}
        >
          <div className={`d-inline-block arrow ${turnClass}`}>
            <IoMdArrowDropright className="d-block" />
          </div>
          Contact
        </a>
        <ul className="collapse multi-collapse" id="contact">
          <li className="list-unstyled">
            <IoMdMail /> cyg65@foxmail.com
          </li>
          <li className="list-unstyled">
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

  render() {
    let turnClass = this.state.clicked ? 'arrow-turn' : '';
    return (
      <div className="mt-3">
        <a
          data-toggle="collapse"
          href="#skills"
          role="button"
          aria-expanded="false"
          aria-controls="skills"
          className="p-0 d-flex mx-0 align-items-center text-uppercase font-weight-light"
          onClick={this.arrowHandler}
        >
          <div className={`d-inline-block arrow ${turnClass}`}>
            <IoMdArrowDropright className="d-block" />
          </div>
          Skills
        </a>
        <div className="mb-3 collapse multi-collapse" id="skills">
          <ul className="list-group mt-2">
            <li className="list-group-item">
              Graphics Design
              <div className="progress" style={{ height: 3 }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: this.state.clicked ? '40%' : '0' }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
            <li className="list-group-item">
              Font-end Development
              <div className="progress" style={{ height: 3 }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: this.state.clicked ? '70%' : '0'
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
