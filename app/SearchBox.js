import React from 'react';
import ReactDOM from 'react-dom';
export default class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.keyword}
          placeholder="enter the name you wanna search"
          onChange={(ev) => this.props.handleChange(ev.target.value)}
        />
        <button onClick={this.props.sendAction}>Search</button>
      </div>
     )
  }
}