import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import config from '../../config';
import './App.scss';

export default class App extends Component {
  render() {
    //const styles = require('./App.scss');
    return (
      <div style={{height:'100%'}}>
        <Helmet {...config.app.head}/>
        <div style={{height:'100%'}}>
        	{ this.props.navComponent }
        	{ this.props.mainComponent }
        </div>
      </div>
    );
  }
}
