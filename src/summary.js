import React, { Component } from 'react';
import {
  IoMdArrowDropright,
  IoMdMail,
  IoMdPhonePortrait
} from 'react-icons/io';

export class Contact extends Component {
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
          className="p-0 d-flex mx-0 align-items-center font-weight-bold"
          onClick={this.arrowHandler}
        >
          <div className={`d-inline-block arrow ${turnClass}`}>
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
    );
  }
}
