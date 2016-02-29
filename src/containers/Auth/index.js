import React, {Component, PropTypes} from 'react';
import './Auth.scss';

export default class Login extends Component {
  render() {
    return(
      <section className="auth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-push-3 col-md-8 col-md-push-2 col-xs-12 text-center">
              <div className="row text-center">
                <a href="http://www.metadisk.org">
                  <img src="img/logo-blue.svg" alt="MetaDisk" className="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
