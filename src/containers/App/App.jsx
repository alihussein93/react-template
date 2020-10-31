import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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

  render() {
    const { isLoading } = this.state;
    const { locale } = this.props;

    return (
      <IntlProvider locale={locale} messages={this.Messages}>
        sadasd
      </IntlProvider>
    );
  }
}

export default App;
