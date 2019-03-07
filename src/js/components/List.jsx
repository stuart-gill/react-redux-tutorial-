import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;

// The List component receives the prop articles which is a copy of the articles array we saw in the Redux state. It comes from the reducer:
//Always remeber: the state in redux comes from reducers
