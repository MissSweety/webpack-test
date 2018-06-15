import React from 'react';

export default class Search extends React.Component {
  render() {
    console.log('in search render');
    console.log(this.props.searchType);
    return (
      <div>
        <input
          type="text"
          value={this.props.keyword}
          placeholder="enter the name you wanna search"
          onChange={(ev) => { this.props.handleChange(ev.target.value)}}
        />
        <button onFocus={this.props.sendAction}>Search</button>
      </div>
     )
  }
}