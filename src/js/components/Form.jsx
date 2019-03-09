import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (article) => dispatch(addArticle(article))
  };
}
//mapDispatchToProps connects Redux actions to React props. This way a connected component is able to dispatch actions. Need to look up object shorthand form of this.

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    console.log(id);
    console.log({ id });
    this.props.addArticle({ title, id }); //this is the Redux part-- action dispatched
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

//component is exported as Form, despite class being ConnectedForm.
//Form is the result of connecting ConnectedForm with the redux store

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
//the first argument for connect must be null when mapStateToProps is absent like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function. If mapStateToProps is absent, this component will not subscribe to the store, but will still receive the dispatch props
