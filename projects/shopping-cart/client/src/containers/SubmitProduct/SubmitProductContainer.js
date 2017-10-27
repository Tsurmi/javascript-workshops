import React, { Component } from 'react';
import {SubmitProduct} from "../../components";

class SubmitProductContainer extends Component {
  render() {
    return (
      <div className="submitProductStyles">
        <SubmitProduct onChange={this.props.onChange} submitProduct={this.props.submitProduct} />
      </div>

    )
  }
}

export default SubmitProductContainer;
