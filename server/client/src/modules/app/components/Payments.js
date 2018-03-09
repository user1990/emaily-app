import React, { Component } from "react";

import { connect } from "react-redux";
import { handleToken } from "../reducers";

import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Email-Feed"
          description="$5 for 5 email credits"
          amount={500} // 5$
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">
            Add Credits
            <i className="material-icons right">add_to_photos</i>
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleToken() {
    dispatch(handleToken());
  }
});

export default connect(null, mapDispatchToProps)(Payments);
