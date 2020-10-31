import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Enums from 'constants/enums';
import EnglishLocales from './locales/en-US.all';
import ArabicLocales from './locales/ar-AE.all';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.authStatus !== prevState.authStatus) {
      return {
        authStatus: nextProps.authStatus,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { authStatus } = this.state;
    if (prevState.authStatus === authStatus) {
      return;
    }
    this.load();
  }

  get Messages() {
    const { locale } = this.props;
    return locale === Enums.locales.ar_AE ? ArabicLocales : EnglishLocales;
  }

  load = async () => {};

  render() {
    const { locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={this.Messages}>
        <div className='app'>app</div>
      </IntlProvider>
    );
  }
}

export default App;
