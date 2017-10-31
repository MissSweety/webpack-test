import React from 'react';
import SearchBox from './SearchBox';
import Plist from './Plist';
import { connect } from 'react-redux';

import { setKeyword, getUserByKeyword } from './actions/github';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <SearchBox
            keyword={this.props.keyword}
            sendAction={this.props.getUserByKeyword}
            handleChange={(name) => this.props.setKeyword(name)}
          />
        </section>
        <Plist {...this.props } />
      </div>
    );
  }
}

const mapStateToProps = ({ github: { keyword, list, loading, firstView }}) => ({
  keyword,
  list,
  loading,
  firstView,
});

// (mapdispatchToProps, 可以是个对象也可以是个函数，个人习惯用对象),
// 把redux的dispatch方法绑定到我们自己写的action上。
// this.props.setKeyword, ==> dispatch(setKeyword);
// 由于用了redux-thunk, 对dispatch进行了封装，如果是函数的话，会有getState， 和dispatch，两个参数。
export default connect(mapStateToProps, {
  setKeyword,
  getUserByKeyword,
})(App);