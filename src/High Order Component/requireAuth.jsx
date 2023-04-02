import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const requireAuth = (Component) => {
  class AuthenticatedComponent extends React.Component {
    render() {
      const { token } = this.props;
      if (!token) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuth;