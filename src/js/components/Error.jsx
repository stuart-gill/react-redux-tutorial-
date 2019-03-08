import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { errors: state.errors };
};
const ConnectedError = ({ errors }) => <p>{errors}</p>;

const Error = connect(mapStateToProps)(ConnectedError);
export default Error;
